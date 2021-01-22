import { Container, FlatListCases } from './styles';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { lawsuitListRequest } from '../../store/modules/lawsuit/actions';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Case from '../../models/Case';
import RowCases from '../../components/RowCases';
import { ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { Spacer } from '../../components/RowCases/styles';
import BottomNavigation from '../../components/BottomNavigation';

let dataHolder: Case[] = [];

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const searchRef = useRef(null);
  const [data, setData] = useState<Case[]>([]);
  const { lawsuit } = useSelector((state) => state);

  useEffect(() => {
    dispatch(lawsuitListRequest());
  }, [dispatch]);

  useEffect(() => {
    setData(lawsuit.cases);
    dataHolder = lawsuit.cases;
  }, [lawsuit]);

  const renderItem: ListRenderItem<Case> = ({ item }) => {
    return <RowCases item={item} />;
  };

  const renderFooter = () => {
    return <Spacer value={20} />;
  };

  const searchFilterFunction = (text: string) => {
    if (text === '') {
      setData(dataHolder);
      setSearch(text);
      return;
    }
    const newData = dataHolder.filter((item) => {
      const itemData = `${item.title.toUpperCase()}${item.number}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
    setSearch(text);
  };

  const handleOnClearText = () => {
    setData(dataHolder);
  };

  return (
    <Container>
      <Spacer value={getStatusBarHeight() + 20} />
      <SearchBar
        ref={searchRef}
        placeholder="Processos"
        round
        lightTheme
        containerStyle={{ backgroundColor: '#fff' }}
        inputContainerStyle={{ height: 40 }}
        inputStyle={{ fontSize: 18, color: '#455a64' }}
        onClear={() => handleOnClearText()}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
      />
      <FlatListCases data={data} renderItem={renderItem} ListFooterComponent={renderFooter} />
    </Container>
  );
};

export default HomeScreen;
