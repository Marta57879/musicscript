/** @jsxImportSource theme-ui */

function MenuButton({text}: any) {

  return (
        <button sx={{
          width: "200px",
          height: "100%", 
          color: "textColor", 
          textAlign: "center", 
          cursor: "pointer",
          border: "1px solid white",
          fontSize: "20px",
          backgroundColor: 'menuButtonBackground',
          transition: '0.6s',
          "&:hover, &:focus": {
            background: "menuButtonBackgroundHover",
            borderTop: '1px solid grey',
            borderLeft: '1px solid grey',
            color: 'textHoverColor'
          },
        }}           
        >{text}</button>        
  );
}

export default MenuButton;

