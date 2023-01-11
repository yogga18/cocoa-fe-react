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
      <div className='faq-wrapper mt-5'>
        <Container fluid>
          <Row>
            <Col md='12' className='mb-5'>
              <h1 className='text-center mb-1'>FAQ</h1>
              <hr className='line text-center'></hr>
            </Col>
            <Col md='12' className='my-2'>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId='1'>
                    <b>Apa itu Cocoa ?</b>
                  </AccordionHeader>
                  <AccordionBody accordionId='1'>
                    <p>
                      <b>Cocoa</b> atau <i>(Theobroma cacao L)</i> tanaman ini
                      berasal dari hutan hujan amazon Amerika Selatan yang dapat
                      tumbuh dengan baik pada wilayah yang berdekatan dengan
                      garis khatulistiwa dengan suhu berkisar 30 derajat celcius
                      hingga 32 derajat celcius tanaman ini dibudidayakan untuk
                      diambil bijinya sebagai bahan utama pembuatan coklat
                      melalui serangkaian proses fermentasi.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId='2'>
                    <b>Kenapa Provinsi yang ada harus dikelompokkan ?</b>
                  </AccordionHeader>
                  <AccordionBody accordionId='2'>
                    <p>
                      Dalam satu dekade terakhir ini produktivitas kakao
                      indonesia terus mengalami penurunan yang disebabkan mulai
                      dari alih fungsi lahan, luas areal berkurang, tanaman
                      tidak produktif, terbatasnya penyuluhan dan pelatihan
                      serta kurangnya akses terhadap teknologi kondisi ini
                      mengakibatkan Indonesia sebagai negara produsen biji kakao
                      harus turun petingkat yang sebelumnya berada di peringkat
                      ke tiga dunia menjadi peringkat ke lima pada tahun 2017{' '}
                      <i>(Statistik Kakao Indonesia 2019, n.d.)</i>
                    </p>
                    <p>
                      Salah satu solusi yang dapat mengatasi permasalahan
                      tersebut adalah menganalisis data yang bersumber dari
                      kementrian pertanian mengenai komoditas kakao di Indonesia
                      untuk mencari dan mengelompokan daerah yang memiliki
                      potensi kurang baik dan potensi baik agar di berikan
                      program atau penyuluhan yang tepat
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId='3'>
                    <b>Apa itu Algoritma K- Menas ?</b>
                  </AccordionHeader>
                  <AccordionBody accordionId='3'>
                    <p>
                      K - Means Clustering yaitu algoritma untuk menemukan
                      kemiripan karakteristik (similarity) antara satu data
                      dengan data yang lainnya dan data yang memiliki kemiripan
                      karakteristik akan dikelompokan pada cluster yang sama
                      sedangkan data yang memiliki kemiripan karakteristik yang
                      berbeda akan dimasukkan kedalam cluster yang berbeda juga
                      (Jumadi Dehotman Sitompul et al., 2019) output dari
                      algoritma K - Means Clustering akan menghasilkan 2
                      kelompok (Cluster) yaitu daerah dengan potensi kurang baik
                      dan daerah dengan potensi baik
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId='4'>
                    <b>Bersumber dari mana data yang digunakan ?</b>
                  </AccordionHeader>
                  <AccordionBody accordionId='4'>
                    <p>
                      Data yang didapat dari kementrian pertanian ( Kementan )
                      berupa data non-spasial ( kualitatif ) luas areal kakao,
                      produktivitas kakao dan produksi kakao sejak tahun 2014
                      hingga 2022 akan dikelompokan guna mencari daerah dengan
                      potensi komoditas kakao di Indonesia
                    </p>
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
