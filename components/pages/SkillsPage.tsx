import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants/Colors'
import { SectionPadding } from '../ui/SectionPadding'
import { generateSections, PageProps } from './HomePage'

const Container = styled(SectionPadding)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.backgroundPrimary};
`

export function SkillsPage({ pageEntry }: PageProps): ReactElement {
  const { sections, name } = pageEntry.fields
  return <Container id={name}>{generateSections(sections)}</Container>
}
