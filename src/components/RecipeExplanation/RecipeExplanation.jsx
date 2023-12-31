import * as S from './RecipeExplanation.styles';

import HFFLogo from '../../assets/Logo.svg';

const RecipeExplanation = (props) => {
  const { order } = props;
  return (
    <>
      {order.map((o, index) => {
        return (
          <S.RecipeBox key={index}>
            <S.RecipeImage src={o.order_img_url ? o.order_img_url : HFFLogo} />
            <S.RecipeNumber>{o?.cook_order}</S.RecipeNumber>
            <S.RecipeDescription>{o?.description}</S.RecipeDescription>
          </S.RecipeBox>
        );
      })}
    </>
  );
};

export { RecipeExplanation };
