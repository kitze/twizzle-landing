import React from 'react';

//styles
import * as S from './styles';

//images
import sizzy from 'images/sizzy.jpg';
import jsui from 'images/jsui.jpg';

import * as L from 'layout-styled-components';

const Product = ({ name, link, description, logo }) => {
  return (
    <S.Product target="_blank" rel="noopener" href={link}>
      <L.Vertical spaceAll={10} centerV>
        <L.Horizontal centerV spaceAll={10}>
          <S.Logo src={logo} />
          <S.Name>{name}</S.Name>
        </L.Horizontal>
        <S.Description>{description}</S.Description>
      </L.Vertical>
    </S.Product>
  );
};

const ProductList = () => {
  return (
    <div>
      <L.Vertical spaceAll={10}>
        <Product
          link="https://sizzy.co"
          name="Sizzy"
          description={`The browser for designers and developers. Stop wasting time on resizing your window and change the way you're developing and testing responsive apps.`}
          logo={sizzy}
        />
        <Product
          link="https://github.com/kitze/jsui"
          name="JSUI"
          description="A powerful UI toolkit for managing JavaScript apps. A complete terminal replacement with a lot of helpful features sprinkled on top."
          logo={jsui}
        />
      </L.Vertical>
    </div>
  );
};

export default ProductList;
