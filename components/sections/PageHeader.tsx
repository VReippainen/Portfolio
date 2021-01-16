import { Entry } from 'contentful'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { Text } from '../ui/Text'
import { FontSize } from '../../constants/FontSize'
import { Colors } from '../../constants/Colors'
import { PageHeaderModel } from '../../models/PageHeaderModel'
import { Spacings } from '../../constants/Spacings'

const TextContainer = styled.div`
  text-align: center;
`

export function PageHeader({ fields }: Entry<PageHeaderModel>): ReactElement {
  const { title, paragraph } = fields
  return (
    <TextContainer>
      <Text
        style={{
          fontSize: FontSize.S52,
          color: Colors.primary,
          marginTop: Spacings.S20,
          marginBottom: Spacings.S20,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: FontSize.S20,
          color: Colors.grey,
          marginBottom: Spacings.S20,
        }}
      >
        {paragraph}
      </Text>
    </TextContainer>
  )
}
