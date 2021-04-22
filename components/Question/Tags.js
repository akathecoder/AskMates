import Link from "next/link";

function Tags({ tag }) {
  return (
    <Link href={"/search/" + tag}>
      <div className="bg-blue-200 py-1 px-2 rounded-md cursor-pointer">
        <h1 className="font-medium ">{tag}</h1>
      </div>
    </Link>
  );
}

export default Tags;
