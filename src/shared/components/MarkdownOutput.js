import React from 'react'
import 'styled-components/macro'

import ReactMarkdown from 'react-markdown'
import RemarkMathPlugin from 'remark-math'
import { BlockMath, InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'

const _mapProps = props => ({
  ...props,
  escapeHtml: false,
  plugins: [RemarkMathPlugin],
  renderers: {
    ...props.renderers,
    math: ({ value }) => <BlockMath>{value}</BlockMath>,
    inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>,
  },
})

const Markdown = props => <ReactMarkdown {..._mapProps(props)} />

const MarkdownOutput = ({ children }) => {
  return <Markdown>{children}</Markdown>
}

export default MarkdownOutput
