import { TextTitle, Container, FlatListCases } from './styles';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { lawsuitListRequest } from '../../store/modules/lawsuit/actions';
import Case from '../../models/Case';
import RowCases from '../../components/RowCases';
import { ListRenderItem } from 'react-native';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { lawsuit } = useSelector((state) => state);

  useEffect(() => {
    dispatch(lawsuitListRequest());
  }, [dispatch]);

  const renderItem: ListRenderItem<Case> = ({ item }) => {
    return <TextTitle>{item.title}</TextTitle>;
  };
  //
  return (
    <Container>
      <FlatListCases data={lawsuit.cases} renderItem={renderItem} />
    </Container>
  );
};

export default HomeScreen;
