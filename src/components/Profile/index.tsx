import useUser from "@Hooks/useUser";

const ProfileContent = () => {
  const { user } = useUser();
  return <div className="pt-32 max-w-6xl m-auto min-h-screen text-3xl">{user?.name}</div>;
};
export default ProfileContent;

// authenticated pages in useRouter
