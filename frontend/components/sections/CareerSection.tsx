import { Entry } from 'contentful'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { CareerModel } from '../../models/CareerModel'
import { formatMonthYear } from '../../utils/format'
import { Text } from '../ui/Text'
import { Spacings } from '../../constants/Spacings'
import { LinkPrimary } from './LinkPrimary'
import { MobileScreen } from '../../constants/Breakpoints'
import { FontSize } from '../../constants/FontSize'

const SectionItem = styled.div`
  flex: 1;
  margin-top: ${Spacings.S20}px;
`

export const CareerContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${MobileScreen} {
    flex-direction: column;
  }
  margin: 20px;
`

function formatDateRow(startDate: string, endDate: string, current: boolean) {
  if (startDate) {
    if (endDate) {
      return `${formatMonthYear(new Date(startDate))} - ${formatMonthYear(
        new Date(endDate)
      )}`
    } else if (current) {
      return `${formatMonthYear(new Date(startDate))} - current`
    }
  }
  return ''
}

function formatTechnologies(technologies: string[]): string {
  if (technologies.length > 0) {
    return `Technologies: ${technologies.reduce(
      (acc, curr) => acc + ` ${curr},`,
      ''
    )}`
  }
}

export function CareerSection({ fields }: Entry<CareerModel>): ReactElement {
  const {
    id,
    title,
    description,
    technologies,
    startDate,
    endDate,
    current,
    company,
    link,
    hide,
  } = fields
  if (hide) {
    return null
  }
  return (
    <CareerContainer style={{ flex: 3 }} id={id}>
      <SectionItem>
        <Text
          style={{
            marginBottom: Spacings.S8,
            fontWeight: 'bold',
            fontSize: FontSize.S20,
          }}
        >
          {company}
        </Text>
        <Text>{formatDateRow(startDate, endDate, current)}</Text>
      </SectionItem>
      <SectionItem style={{ flex: 2 }}>
        <Text style={{ marginBottom: Spacings.S8, fontWeight: 'bold' }}>
          {title}
        </Text>
        <Text style={{ marginBottom: Spacings.S8 }}>{description}</Text>
        {technologies ? (
          <Text style={{ marginBottom: Spacings.S8 }}>
            {formatTechnologies(technologies)}
          </Text>
        ) : null}
        {link ? <LinkPrimary {...link} /> : null}
      </SectionItem>
    </CareerContainer>
  )
}
