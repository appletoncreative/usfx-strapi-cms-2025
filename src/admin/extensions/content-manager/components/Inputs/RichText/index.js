import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import CodeBlock from "@tiptap/extension-code-block";
import Image from "@tiptap/extension-image";

const CustomRichText = ({ onChange, value }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      CodeBlock,
      Image,
      // Add/remove what you want here
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange({ target: { value: editor.getJSON() } });
    },
  });

  return <EditorContent editor={editor} />;
};

export default CustomRichText;
