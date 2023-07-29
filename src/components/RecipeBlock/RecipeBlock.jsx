import * as S from './RecipeBlock.styles';

import { AiOutlineUser } from 'react-icons/ai';

const RecipeBlock = ({ recipe }) => {
  return (
    <S.Container>
      <S.Img src={recipe.img_url} alt="음식 사진" />
      <S.Title>{recipe.recipe_name}</S.Title>
      {recipe.summary && <S.Summary>{recipe.summary}</S.Summary>}
      <S.Nickname>
        <AiOutlineUser /> <span>{recipe.nickname}</span>
      </S.Nickname>
      <S.Score>
        ⭐ <span>{recipe.star}</span>
        <span>{`(${recipe.count})`}</span>
      </S.Score>
    </S.Container>
  );
};

export default RecipeBlock;