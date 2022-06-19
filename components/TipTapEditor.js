import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

function TipTapEditor(props) {
	const [editing, setEditing] = useState(false);
	const [undo, setUndo] = useState(false);
	const [bold, setBold] = useState(false);
	const [italics, setItalics] = useState(false);
	const [underline, setUnderline] = useState(false);

	const { setContent, content } = props;

	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				gapcursor: "false",
			}),
			Underline,
			Placeholder.configure({
				emptyEditorClass: "is-editor-empty",
				// Use a placeholder:
				placeholder: props.placeholder,
			}),
		],
		content: props.content,
		editable: props.page == "term" ? false : props.page == "def" ? false : true,
		onUpdate({ editor }) {
			setContent(editor.getJSON());
		},
	});

	return (
		<div
			className="editor"
			onMouseLeave={() => setEditing(false)}
			style={{
				width:
					props.page == "description"
						? "100%"
						: props.page == "def"
						? "57.5%"
						: "47.5%",

				maxWidth: props.page == "description" && "100%",
				margin: props.page == "def" || (props.page == "term" && "0 15px"),
			}}
		>
			{props.page != "def" && props.page != "term" && (
				<div
					className="editor--menu"
					style={{
						display: editing ? "flex" : "none",
					}}
				>
					<button
						onClick={(e) => {
							e.preventDefault();
							editor.commands.undo();
							setUndo((prev) => !prev);
							setEditing(true);
						}}
					>
						undo
					</button>
					<button
						onClick={(e) => {
							e.preventDefault();
							editor.chain().focus().toggleBold().run();
							setBold((prev) => !prev);
							setEditing(true);
						}}
						style={{
							backgroundColor: bold && "var(--accent)",
						}}
					>
						bold
					</button>
					<button
						onClick={(e) => {
							e.preventDefault();
							editor.chain().focus().toggleItalic().run();
							setItalics((prev) => !prev);
							setEditing(true);
						}}
						style={{
							backgroundColor: italics && "var(--accent)",
						}}
					>
						italics
					</button>
					<button
						onClick={(e) => {
							e.preventDefault();
							editor.chain().focus().toggleUnderline().run();
							setUnderline((prev) => !prev);
							setEditing(true);
						}}
						style={{
							backgroundColor: underline && "var(--accent)",
						}}
					>
						underline
					</button>
				</div>
			)}
			<EditorContent
				onFocus={() => {
					setEditing(true);
				}}
				onInput={() => {
					setEditing(true);
				}}
				onMouseDown={() => {
					setEditing(true);
				}}
				editor={editor}
				style={{
					width: "100%",
					fontWeight: "200",
					fontSize: "18px",
					marginTop: editing
						? "5px"
						: props.page == "def"
						? "5px"
						: props.page == "term"
						? "5px"
						: "45px",
					borderBottom:
						props.page == "def"
							? "2px solid white"
							: props.page == "term"
							? "2px solid white"
							: "2px solid var(--primary)",
				}}
			/>
		</div>
	);
}

export default TipTapEditor;
