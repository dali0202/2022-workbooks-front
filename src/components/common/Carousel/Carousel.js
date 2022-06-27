import React from 'react';
import { Container, Item, Items } from './Carousel.styles';

export function CarouselItem({ children }) {
  return <Item>{children}</Item>;
}
function Carousel({ children, curIndex }) {
  return (
    <Container>
      <Items curIndex={curIndex}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child);
        })}
      </Items>
    </Container>
  );
}

export default Carousel;
