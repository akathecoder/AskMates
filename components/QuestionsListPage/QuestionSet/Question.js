import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserCircle,
	faEye,
	faEdit,
	faShare,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import date from "date-and-time";

const Question = ({ question }) => {
	const imageLink = "/assets/profilePic.jpeg";
	return (
		// Question Card
		<div className="my-6 px-10 py-6 bg-gray-50 shadow-lg">
			<div className="grid grid-cols-10 gap-x-5 items-center">
				{/* user details */}
				<div className="col-span-1">
					<Link href={"/u/" + question.username}>
						<a className="mt-1 flex flex-col items-center space-y-3 font-medium group opacity-75 hover:opacity-100">
							{imageLink ? (
								<Image
									src="/assets/profilePic.jpeg"
									alt="Picture of the author"
									className="rounded-full overflow-hidden"
									width={50}
									height={50}
									objectFit="cover"
								/>
							) : (
								<FontAwesomeIcon
									icon={faUserCircle}
									size="4x"
									className="leading-lg opacity-75"
								/>
							)}
							<div className="my-auto text-center">
								<p className="text-sm text-gray-700">
									{question.firstName +
										" " +
										question.lastName}
								</p>
								<p className="text-xs text-gray-500">
									{question.field + " " + question.batch}
								</p>
							</div>
						</a>
					</Link>
				</div>
				<div className="flex flex-col items-center justify-center col-start-2 col-end-11">
					{/* Date and Views */}
					<div className="flex flex-row justify-end items-center space-x-10 mx-6 px-2 w-full">
						{/* Views */}
						<div>
							<FontAwesomeIcon
								icon={faEye}
								size="x"
								className="text-gray-500"
							/>
							<span className="text-gray-500 text-sm">
								&nbsp;{question.views}
							</span>
						</div>

						{/* Date */}
						<p className="text-sm text-gray-500 font-semibold">
							{date.format(
								date.parse(
									new String(question.doc).substring(0, 10),
									"YYYY-MM-DD"
								),
								"ddd, MMM DD YYYY"
							)}
						</p>
					</div>

					{/* Question */}
					<div className="">
						{/* Question title */}
						<Link href="/">
							<h3 className="text-lg font-bold text-black mb-2 mx-2 text-justify cursor-pointer">
								{question.title}
							</h3>
						</Link>

						{/* Question body */}
						<p className="font-normal text-gray-700 mt-2 mb-2 mx-2 text-justify">
							{question.content.length > 300
								? question.content.substring(0, 300) + "..."
								: question.content}
						</p>

						{/* Action Buttons and User Details */}
						<div className="mx-2 mt-5 flex flex-row justify-between items-center">
							{/* Answer and Share Buttons */}
							<div className="flex flex-row justify-evenly space-x-7">
								<div className="cursor-pointer group">
									<FontAwesomeIcon
										icon={faEdit}
										size="x"
										className="text-gray-400 group-hover:text-gray-800"
									/>
									<span className="text-gray-400 group-hover:text-gray-800 font-bold">
										&nbsp;Answer
									</span>
								</div>
								<div className="cursor-pointer group">
									<FontAwesomeIcon
										icon={faShare}
										size="x"
										className="text-gray-400 group-hover:text-gray-800"
									/>
									<span className="text-gray-400 group-hover:text-gray-800 font-bold">
										&nbsp;Share
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Question;
