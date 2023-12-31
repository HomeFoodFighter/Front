import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const NameDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 10px;
`;

const MenuName = styled.h1`
  font-size: 35px;
`;

const MenuDescription = styled.p`
  font-size: 20px;
`;

const ProfileAddOnContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: center;
  gap: 1rem;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid lightgray;
`;

const ProfileName = styled.h6`
  font-size: 15px;
`;

const AddOnContainer = styled.div`
  display: flex;
  flex-direction: center;
  gap: 1rem;
  align-items: center;
`;

const BookMark = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    scale: 1.3;
  }
`;

const Share = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    scale: 1.3;
  }
`;

const SubDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const DifficultyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const ServingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export {
  Wrapper,
  MenuImage,
  NameDescriptionContainer,
  MenuName,
  MenuDescription,
  ProfileAddOnContainer,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  AddOnContainer,
  BookMark,
  Share,
  SubDetailContainer,
  TimeContainer,
  DifficultyContainer,
  ServingContainer,
};
