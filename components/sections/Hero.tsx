import { Entry } from 'contentful'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { HeroModel } from '../../models/HeroModel'
import { Text } from '../../components/ui/Text'
import { FontSize } from '../../constants/FontSize'
import { Colors } from '../../constants/Colors'
import { MobileScreen } from '../../constants/Breakpoints'
import { Spacings } from '../../constants/Spacings'

const HeroContainer = styled.div`
  min-height: 100vh;
  background-color: ${Colors.primaryTransparent};
`

const TextContainer = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  top: 40%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  ${MobileScreen} {
    top: 30%;
    margin: 0 20px;
    width: auto;
  }
`

const Image = styled.div<{ imageUrl: string }>`
  min-height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-size: cover;
  ${MobileScreen} {
    min-height: 1000px;
    position: absolute;
  }
`

const Title = styled(Text)`
  font-size: ${FontSize.S64}px;
  color: ${Colors.white};
  font-weight: bold;
  border-bottom: 1px solid ${Colors.white};
  margin-left: auto;
  margin-right: auto;
  padding-bottom: ${Spacings.S8}px;
  margin-bottom: ${Spacings.S8}px;
`

const Paragraph = styled(Text)`
  font-size: ${FontSize.S32}px;
  color: ${Colors.white};
`

export function Hero({ fields }: Entry<HeroModel>): ReactElement {
  const { title, paragraph, backgroundImage } = fields
  return (
    <>
      <Image imageUrl={backgroundImage.fields.file.url} />
      <HeroContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Paragraph>{paragraph}</Paragraph>
        </TextContainer>
      </HeroContainer>
    </>
  )
}
