/** @jsxImportSource theme-ui */
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Flex } from "theme-ui";

function MenuButton({text}: any) {
  return (
    <Flex sx={{
      margin: '5px'}
    }>
      <AwesomeButton>{text}</AwesomeButton>
    </Flex>
        // <button sx={{
        //   width: "200px",
        //   height: "100%", 
        //   color: "textColor", 
        //   textAlign: "center", 
        //   cursor: "pointer",
        //   border: "1px solid white",
        //   fontSize: "20px",
        //   backgroundColor: 'menuButtonBackground',
        //   transition: '0.6s',
        //   "&:hover, &:focus": {
        //     background: "menuButtonBackgroundHover",
        //     borderTop: '1px solid grey',
        //     borderLeft: '1px solid grey',
        //     color: 'textHoverColor'
        //   },
        // }}           
        // >{text}</button>        
  );
}

export default MenuButton;

