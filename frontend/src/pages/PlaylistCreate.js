import { useRef, useEffect } from 'react'
import styled, { css } from "styled-components"
import AlbumIcon from '@mui/icons-material/Album'

import { Wrapper, Header, DefaultBtn } from "components/Common"
import { Switch } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const PlaylistCreate = () => {
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current.select()
    inputRef.current.focus()
  })

  return (
    <StyleWrapper url="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80">
      <Header 
        title="New Playlist"
        desc="플레이리스트 만들기"
      />
      <InputContent>
        <DefaultCover>
          <AlbumIcon color="white" fontSize="large"/>
        </DefaultCover>
        <RightContent>
          <Top>
            <InputTitle>
              <input type="text" ref={inputRef} defaultValue="#플레이리스트 제목"></input>
            </InputTitle>
            <InputRivateToggle>
              공개여부
              <Switch defaultChecked/>
            </InputRivateToggle>
          </Top>
          <Bottom>
            <AddMusicBtn onClick={() => navigate("/playlist/select")}>
              곡 추가
            </AddMusicBtn>
          </Bottom>
        </RightContent>
      </InputContent>
    </StyleWrapper>
  );
};

const StyleWrapper = styled(Wrapper)`
  ${({theme, url}) => css`
    background-image: linear-gradient(to bottom left, rgba(0, 0, 0, 0.8), ${theme.palette.darkAlt} 70%), url(${url});
    background-size: cover;
  `}
`

const InputContent = styled.div`
  height: 350px;
  width: 1100px;
  overflow: hidden;
  display: grid;
  padding: 0px 10px;
  grid-template-columns: 300px 700px;
  gap: 30px;
  justify-content: start;
`

const DefaultCover = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({theme}) => theme.palette.dark};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
` 

const RightContent = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  flex-direction: column;
  flex-grow: 4;
  align-items: start;
`

const Bottom = styled.div`
  flex-grow: 1;
  justify-content: start;
  align-items: end;
`

const InputTitle = styled.div`
  color: #fff;
  font-size: 45px;
  font-weight: bold;
  
  & input {
    color: #fff;
    background-color: transparent;
    font-size: 50px;
    font-weight: 800;
    border: none;
    border-bottom: 1px solid white;
    width: 100%;
    
    :focus {
      outline: none;
  }
`

const InputRivateToggle = styled.div`
  font-weight: light;
  display: inline-block;
`

const AddMusicBtn = styled(DefaultBtn)`
`

export default PlaylistCreate;