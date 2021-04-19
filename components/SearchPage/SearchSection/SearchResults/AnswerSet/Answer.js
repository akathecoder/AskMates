import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faCaretUp,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import {
	voteUp,
	voteDown,
} from "../../../../../utils/voteAnswers";
import { useState } from "react";

const Answer = ({ data }) => {
	data = JSON.parse(data);
	const imageLink = "/assets/profilePic.jpeg";

	const [votes, setVotes] = useState([
		data.upVotes,
		data.downVotes,
	]);

	return (
		<div className="my-6 px-10 py-6 bg-white shadow-lg rounded-lg font-normal">
			<div className="grid grid-cols-10 gap-x-5 items-center">
				<div className="col-span-1 mt-1 flex flex-col items-center space-y-3">
					{data.correct.toLowerCase() == "c" && (
						<FontAwesomeIcon
							icon={faCheck}
							size="2x"
							color="green"
							className="mt-2"
						/>
					)}

					<div
						className="text-center cursor-pointer"
						onClick={() =>
							voteUp(data.answerId, votes, setVotes)
						}
					>
						<FontAwesomeIcon
							icon={faCaretUp}
							size="2x"
							color="gray"
						/>
					</div>
					<p className="text-center">
						{votes[0] - votes[1]}
					</p>

					<div
						className="text-center cursor-pointer"
						onClick={() =>
							voteDown(data.answerId, votes, setVotes)
						}
					>
						<FontAwesomeIcon
							icon={faCaretDown}
							size="2x"
							color="gray"
						/>
					</div>
				</div>

				{/* Answer Body */}
				<div className="text-justify mt-1 mb-auto col-start-2 col-end-11">
					<p>{data.answerBody}</p>
				</div>
			</div>

			{/* user details */}
			<div className="mr-10 mb-6 flex flex-row-reverse">
				<Link href={"/u/" + data.username}>
					<a className="mt-1 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
						{imageLink ? (
							<Image
								src="/assets/profilePic.jpeg"
								alt="Picture of the author"
								className="rounded-full overflow-hidden"
								width={40}
								height={40}
								objectFit="cover"
							/>
						) : (
							<FontAwesomeIcon
								icon={faUserCircle}
								size="4x"
								className="leading-lg opacity-75"
							/>
						)}
						<div className="mx-4 my-auto">
							<p className="text-sm text-gray-900">
								John Doe
							</p>
							{/* <p>&nbsp;&nbsp;&nbsp;&nbsp;</p> */}
							<p className="text-xs text-gray-600">
								Computer Science & Engineering
							</p>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Answer;
