import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import BlocksInput from "@strapi/plugin-content-manager/admin/src/components/Inputs/Blocks";

export default {
  register(app) {
    app.addFields({
      type: "blocks",
      Component: (props) => (
        <BlocksInput
          {...props}
          extensions={[Underline, Highlight]} // add new extensions
          toolbar={{
            items: ["bold", "italic", "underline", "highlight", "codeBlock"],
          }}
        />
      ),
    });
  },
};
