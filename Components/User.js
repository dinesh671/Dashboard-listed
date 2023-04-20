import { useSession, signIn, signOut } from 'next-auth/react';
import pic from '../public/favicon.ico'
import Image from 'next/image';
function User(className) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Image
          onClick={signOut}
          src={session.user.image}
          alt=""
          width={40}
          height={40}
          className="rounded-full w-10 h-10 cursor-pointer"
        />
      </>
    );
  }
  return (
    <>
      <Image
        onClick={() => signIn('google', { callbackUrl: '/Dashboard' })}
        src={pic}
        alt=""
        width={40}
        height={40}
        className="rounded-full w-10 h-10 cursor-pointer"
      />
    </>
  );
}

export default User;
