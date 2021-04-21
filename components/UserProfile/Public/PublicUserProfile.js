export default function PublicUserProfile({ userData }) {
  userData = JSON.parse(userData);
  return (
    <>
      <div
        className="fixed top-20 w-full h-3/5 bg-center bg-cover z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
        }}
      ></div>
    </>
  );
}

// {`${userData.firstName} ${
//   userData.middleName ? userData.middleName + ` ` : null
// }${userData.lastName}`}

// {userData.field}

// {userData.degree + " - " + userData.batch}
