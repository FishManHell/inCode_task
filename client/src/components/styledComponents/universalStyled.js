import styled from "styled-components";

export const UniversalBlockTicker = styled.section`
  width: ${props => props.width};
  border: ${props => props.border};
  border-radius: ${props => props.border_radius};
  display: ${props => props.display};
  flex-direction: ${props => props.flex_direction};
  justify-content: ${props => props.justify_content};
  align-items: ${props => props.align_items};
  background: ${props => props.background};
  box-shadow: ${props => props.box_shadow};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`