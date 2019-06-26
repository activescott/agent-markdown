import { Composer } from "../Composer"
import { HtmlNode } from "../HtmlNode"
import { ComposerContext } from "../ComposerContext"
import { TextWriter, BlockType } from "../TextWriter"
export { UlComposer, OlComposer, LiComposer } from "./Lists"
export { BrComposer } from "./BrComposer"
export { EmphasizeComposer } from "./EmphasizeComposer"
export { HeadingComposer } from "./HeadingComposer"

export class FallbackComposer implements Composer {
  compose(context: ComposerContext, writer: TextWriter, input: HtmlNode): void {
    context.compose(
      writer,
      input.children
    )
  }
}

export class TextComposer implements Composer {
  compose(context: ComposerContext, writer: TextWriter, input: HtmlNode): void {
    console.assert(input.type === "text", "expected input to be text")
    let rawText = input.data ? input.data : ""
    writer.writeTextContent(rawText)
  }
}

export class DivComposer implements Composer {
  compose(context: ComposerContext, writer: TextWriter, input: HtmlNode): void {
    writer.beginBlock(BlockType.default)
    context.compose(
      writer,
      input.children
    )
    writer.endBlock(BlockType.default)
  }
}
