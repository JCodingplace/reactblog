import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";
import Typography from '@material-ui/core/Typography';


function Header(data){
  return (
    <Typography
      variant={`h${data.level}`}
      gutterBottom
    >
      {
        data.data.map((textObj, index) => 
          <React.Fragment key={index}>{textObj.text}</React.Fragment>
        )
      }
    </Typography>
  )
}

function Paragraph(data){
  const getText = {
    "": (t) => <React.Fragment>{t}</React.Fragment>,
    "b": (t) => <b>{t}</b>,
    "i": (t) => <i>{t}</i>,
    "u": (t) => <u>{t}</u>,
    "c": (t) => <code>{t}</code>,
    "br": (t) => <><br/>{t}</>
  }

  return (
    <Typography variant="body1" gutterBottom>
      {
        data.map((textObj, index) => 
          <React.Fragment key={index}>
            {getText[textObj.type](textObj.text)}
          </React.Fragment>
        )
      }
    </Typography>
  )
}

function Code(data){
  return (
    <CopyBlock 
      language={data.language}
      text={data.data.join("\n")}
      theme={dracula}
      wrapLines
    />
  )
}

export default function Block(props){
  const markdownJSON = props.markdownJSON;
  var components = {
    'h': Header,
    'p': Paragraph,
    "code": Code
  }
  return (
    <>
      {components[markdownJSON.type](markdownJSON.data)}
    </>
  )
}