import logo from './image/8ball.png'
import styled, {keyframes} from 'styled-components';

function App() {
  return (
    <Background>
    <ContentContainer>
      <MagicTitle>
        Magic 8-Ball
      </MagicTitle>
      <MagicBall src={logo}/>
      <ResultContainer>

      </ResultContainer>
      <Input placeholder="Got a question?"/>
      <SubmitButton>Submit</SubmitButton>
      <HistoryButton>History</HistoryButton>
    </ContentContainer>
    </Background>
  );
}

export default App;


const shake = keyframes`
0% { 
  transform: translate(1px, 1px) rotate(0deg); 
}
  10% { 
    transform: translate(-1px, -2px) rotate(-1deg); 
  }
  20% { 
    transform: translate(-3px, 0px) rotate(1deg); 
  }
  30% { 
    transform: translate(3px, 2px) rotate(0deg); 
  }
  40% { 
    transform: translate(1px, -1px) rotate(1deg); 
  }
  50% { 
    transform: translate(-1px, 2px) rotate(-1deg); 
  }
  60% { 
    transform: translate(-3px, 1px) rotate(0deg); 
  }
  70% { 
    transform: translate(3px, 1px) rotate(-1deg); 
  }
  80% { 
    transform: translate(-1px, -1px) rotate(1deg); 
  }
  90% { 
    transform: translate(1px, 2px) rotate(0deg); 
  }
  100% { 
    transform: translate(1px, 1px) rotate(-1deg); 
  }
`;

const Background = styled.body`
	background: linear-gradient(-45deg, #f25f25, #25b8f2);
	background-size: 300% 300%;
	animation: gradient 20s ease infinite;
	height: 100vh;
`;


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Josefin Sans;
`;

const MagicTitle = styled.h1`
    font-size: 60px;
`;

const MagicBall = styled.img`
  height: 300px;
  width: 300px;
  transition: transform 250ms ease-in-out;
  &:hover {
    animation: ${shake} 2s infinite;
  }
`;

const ResultContainer = styled.div`
  width: 200px;
  height: 200px;
`;

const Input = styled.input`
  width: 400px;
  height: 100px;
  border-radius: 50px;
  font-family: Josefin Sans;
  font-size: 20px;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6px );
   border: none;
   color: #fff;
  ::placeholder {
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
`;

const SubmitButton = styled.button`
width: 200px;
height: 100px;
border-radius: 50px;
font-family: Josefin Sans;
font-size: 20px;
margin-top: 15px;
background: rgba( 255, 255, 255, 0.25 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border: none;
color: #fff;
`;

const HistoryButton = styled.button`
width: 200px;
height: 100px;
border-radius: 50px;
font-family: Josefin Sans;
font-size: 20px;
margin-top: 15px;
background: rgba( 255, 255, 255, 0.25 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border: none;
color: #fff;
`;