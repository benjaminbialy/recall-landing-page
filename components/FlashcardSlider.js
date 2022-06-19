import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import ArrowKeysReact from "arrow-keys-react/lib/ArrowKeysReact";
import ProgressBar from "./ProgessBar";

// show data from an array of objects, each object being a flashcard
// requires an array of objects ie/ flashcards

function FlashcardSlider(props) {
	const [cardNumber, setCardNumber] = useState(0);
	const [term, setTerm] = useState(true);

	const { flashcardsArray, reset } = props;

	useEffect(() => {
		setCardNumber(0);
	}, [flashcardsArray, reset]);

	const handleNext = () => {
		if (cardNumber !== flashcardsArray.length - 1) {
			setCardNumber(cardNumber + 1);
		} else {
			setCardNumber(0);
		}
	};
	const handlePrev = () => {
		if (cardNumber !== 0) {
			setCardNumber(cardNumber - 1);
		} else {
			setCardNumber(flashcardsArray.length - 1);
		}
	};

	const handleFlip = () => {
		setTerm(!term);
	};

	// Arrow Keys React library to control the card movement by arrow keys.
	ArrowKeysReact.config({
		left: () => {
			handlePrev();
		},
		right: () => {
			handleNext();
		},
		up: () => {
			handleFlip();
		},
		down: () => {
			handleFlip();
		},
	});

	return (
		<div
			className="flashcardslider"
			// allows key controls of flashcards when focussed on div
			{...ArrowKeysReact.events}
			tabIndex={0}
			style={{
				marginTop: props.page === "flashcards" && "0",
				height: props.page === "flashcards" && "90vh",
				width: props.page === "flashcards" && "75vw",
				display: props.page === "flashcards" && "flex",
				flexDirection: props.page === "flashcards" && "column",
				alignItems: props.page === "flashcards" && "center",
			}}
			onFocus={(e) => {
				e.preventDefault();
			}}
		>
			{props.page === "flashcards" && (
				<ProgressBar completed={cardNumber} total={flashcardsArray.length} />
			)}
			{
				<Flashcard
					term={flashcardsArray[cardNumber].term}
					desc={flashcardsArray[cardNumber].definition}
					key={cardNumber}
					handleFlip={handleFlip}
					stateTerm={term}
					setTerm={setTerm}
					page={props.page}
				/>
			}
			<div
				className="flashcardslider--controls"
				style={{
					width: props.page === "flashcards" && "65%",
				}}
			>
				<div className="flashcardslider--controls--arrows">
					<button
						className="flashcardslider--controls--arrows--btn"
						onClick={handleNext}
					>
						&#8594;
					</button>
					<button
						className="flashcardslider--controls--arrows--btn"
						onClick={handlePrev}
					>
						&#8592;
					</button>
				</div>
				<div className="flashcardslider--controls--count">
					{cardNumber + 1 + "/" + flashcardsArray.length}
				</div>
			</div>
		</div>
	);
}

export default FlashcardSlider;
