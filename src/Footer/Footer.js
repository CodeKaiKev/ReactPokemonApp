import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer({positionK}) {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left' style={{position: positionK, left: "0", bottom: "0", right: "0"}}>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} {' '} Kevin's Pokedex
        {/* <a className='text-dark' href='https://mdbootstrap.com/'>
          Kevin's Pokedex
        </a> */}
      </div>
    </MDBFooter>
  );
}