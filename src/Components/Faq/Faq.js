import React, { Fragment, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from 'reactstrap';
import './Faq.scss';

const Faq = () => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Fragment>
      <div className='faq-wrapper'>
        <Container fluid>
          <h1 className='text-center'>FAQ</h1>
          <Row>
            <Col md='12' className='my-2'>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId='1'>
                    <b>Apa itu Cocoa ?</b>
                  </AccordionHeader>
                  <AccordionBody accordionId='1'>
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    a quia quod voluptas quas voluptate lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Ea a quia quod voluptas
                    quas voluptate lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ea a quia quod voluptas quas voluptate
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    a quia quod voluptas quas voluptate
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId='2'>
                    <b>Kenapa Provinsi yang ada harus dikelompokkan ?</b>
                  </AccordionHeader>
                  <AccordionBody accordionId='2'>
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    a quia quod voluptas quas voluptate lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Ea a quia quod voluptas
                    quas voluptate lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ea a quia quod voluptas quas voluptate
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    a quia quod voluptas quas voluptate
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId='3'>
                    <b>Apa itu Algoritma K- Menas ?</b>
                  </AccordionHeader>
                  <AccordionBody accordionId='3'>
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    a quia quod voluptas quas voluptate lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Ea a quia quod voluptas
                    quas voluptate lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ea a quia quod voluptas quas voluptate
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    a quia quod voluptas quas voluptate
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId='4'>
                    <b>Bersumber dari mana data yang digunakan ?</b>
                  </AccordionHeader>
                  <AccordionBody accordionId='4'>
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    a quia quod voluptas quas voluptate lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Ea a quia quod voluptas
                    quas voluptate lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ea a quia quod voluptas quas voluptate
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    a quia quod voluptas quas voluptate
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Faq;
