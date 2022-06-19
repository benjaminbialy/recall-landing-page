import React, { useState, useEffect } from "react";
import { useEditor, EditorContent, Commands } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

function DescriptionEditor(props) {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				gapcursor: "false",
			}),
			Underline,
		],
		editable: false,
		content: props.content,
	});

	editor?.commands.setContent(props.content);

	return (
		<div className="" style={{}}>
			<EditorContent editor={editor} style={{}} />
		</div>
	);
}

export default DescriptionEditor;
