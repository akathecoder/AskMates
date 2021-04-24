import Link from "next/link";

function Tags({ tag }) {
  return (
    <Link href={"/search/" + tag}>
      <div className="bg-gradient-to-br from-primary via-secondary to-danger bg-opacity-30 text-white py-1 px-2 rounded-sm shadow-lg cursor-pointer ">
        <h1 className="font-medium ">{tag}</h1>
      </div>
    </Link>
  );
}

export default Tags;
