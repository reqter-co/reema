import { createClient } from "contentful";
import { BlogPost } from "@Interfaces/post";

export const CONTENT_TYPE_BLOGPOST = "blogPost";
export const CONTENT_TYPE_PERSON = "author";
export const CONTENT_TYPE_TAGS = "tag";

// const Space = process.env.CONTENTFUL_SPACE as string;
// const Token = process.env.CONTENTFUL_TOKEN as string;
export class ContentfulService {
  private client = createClient({
    space: "k8cbto0cos15",
    accessToken: "-dZxLcj6TFQsJqMPFH_Y9nHylRw02zYHfgEHiX56KeI",
  });

  /**
   * Maps the items fetched by contentful
   * @param entries
   */
  private mapData(entries: any): BlogPost[] {
    return entries.map(({ sys, fields }: { sys: any; fields: any }) => ({
      id: sys.id,
      title: fields.title,
      description: fields.description,
      heroImage: fields.heroImage.fields.file.url,
      slug: fields.slug,
      tags: fields.tags,
      publishedAt: fields.publishDate.toString()
        ? new Date(fields.publishDate).toString()
        : new Date(sys.createdAt).toString(),
    }));
  }

  async fetchPostBySlug(slug: any) {
    return await this.client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      "fields.slug": slug,
    });
  }

  async getAllTags() {
    const content = await this.client.getEntries({
      content_type: CONTENT_TYPE_TAGS,
    });

    const tags = content.items.map(
      ({ sys, fields }: { sys: any; fields: any }) => ({
        id: sys.id,
        name: fields.name,
      })
    );

    return { tags };
  }

  // limit,
  //       skip,
  //       "fields.tags.sys.id": tag,
  public async getBlogPostEntries() {
    try {
      const contents = await this.client.getEntries({
        include: 1,
        content_type: CONTENT_TYPE_BLOGPOST,
        order: "fields.publishDate",
      });

      const entries = contents.items.map(
        ({ sys, fields }: { sys: any; fields: any }) => ({
          id: sys.id,
          title: fields.title,
          description: fields.description,
          heroImage: fields.heroImage.fields.file.url,
          slug: fields.slug,
          tags: fields.tags,
          publishedAt: fields.publishDate.toString()
            ? new Date(fields.publishDate).toString()
            : new Date(sys.createdAt).toString(),
        })
      );

      return { entries };
    } catch (error) {
      // TODO: add error handling
      console.log(error);
    }
  }

  async getPostBySlug(slug: any) {
    try {
      const content: any = await this.fetchPostBySlug(slug);

      const entry: { sys: any; fields: any } = content.items[0];

      const author = {
        name: entry.fields.author.fields.name,
        title: entry.fields.author.fields.title,
        company: entry.fields.author.fields.company,
        shortBio: entry.fields.author.fields.shortBio,
      };

      return {
        tags: [],
        id: entry.sys.id,
        slug: entry.fields.slug,
        body: entry.fields.body,
        title: entry.fields.title,
        description: entry.fields.description,
        heroImage: { url: entry.fields.heroImage.fields.file.url },
        author: { ...author, id: entry.fields.author.sys.id },
        publishedAt: entry.fields.publishDate.toString()
          ? new Date(entry.fields.publishDate).toString()
          : new Date(entry.sys.createdAt).toString(),
      };
    } catch (error) {
      console.error(error);
    }
  }
  async fetchSuggestions(tags: string[], currentArticleSlug: string) {
    const limit = 3;
    let entries = [];

    const initialOptions = {
      content_type: CONTENT_TYPE_BLOGPOST,
      limit,
      // find at least one matching tag, else undefined properties are not copied
      "fields.tags.sys.id[in]": tags.length ? tags.join(",") : undefined,
      "fields.slug[ne]": currentArticleSlug, // exclude current article
    };

    try {
      const suggestionsByTags = await this.client.getEntries(initialOptions);

      entries = suggestionsByTags.items;
      // number of suggestions by tag is less than the limit
      if (suggestionsByTags.total < limit) {
        // exclude already picked slugs
        const slugsToExclude = [
          ...suggestionsByTags.items,
          { fields: { slug: currentArticleSlug } },
        ]
          .map((item: { fields: any }) => item.fields.slug)
          .join(",");

        // fetch random suggestions
        const randomSuggestions = await this.client.getEntries({
          content_type: CONTENT_TYPE_BLOGPOST,
          limit: limit - suggestionsByTags.total,
          "fields.slug[nin]": slugsToExclude, // exclude slugs already fetched
        });

        entries = [...entries, ...randomSuggestions.items];
      }

      entries = this.mapData(entries);

      return entries;
    } catch (e) {
      console.error(e);
    }
  }
}
