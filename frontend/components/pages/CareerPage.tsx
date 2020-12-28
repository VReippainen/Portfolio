import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants/Colors'
import { generateSections, PageProps } from './HomePage'

const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 180px;
  background-color: ${Colors.backgroundPrimary};
`

export function CareerPage({ pageEntry }: PageProps): ReactElement {
  const { sections, name } = pageEntry.fields
  return <Container id={name}>{generateSections(sections)}</Container>
}
