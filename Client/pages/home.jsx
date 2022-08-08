import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function Home({ user }) {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        placeItems: "center",
        gap: "1rem",
      }}
    >
      <h3>Signed in as {user.name}</h3>
      <h3>Your email is {user.email}</h3>
      <img src={user.image} alt={user.name} referrerPolicy="no-referrer" />
      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Sign out
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return {};
  }

  return {
    props: {
      user: session.user,
    },
  };
}
