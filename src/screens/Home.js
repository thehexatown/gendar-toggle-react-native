import React, {useState} from 'react';
import {View} from 'react-native';
import Genders from '../components/Genders';

const genders = [
  {
    id: 1,
    title: 'Male',
    isSelected: false,
  },
  {
    id: 2,
    title: 'Female',
    isSelected: false,
  },
  {
    id: 3,
    title: 'Non-Binary',
    isSelected: false,
  },
];

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(genders);
  const [chooseAll, setChooseAll] = useState(false);

  const onGenderClick = item => {
    setChooseAll(false);
    const array = selectedTab.map((val, ind) =>
      val.id === item.id
        ? {...val, isSelected: !val.isSelected}
        : {...val, isSelected: false},
    );
    setSelectedTab(array);
  };

  const onChooseAll = () => {
    let chooseArray = [];

    setChooseAll(!chooseAll);
    if (chooseAll) {
      chooseArray = selectedTab.map((item, ind) => {
        return {...item, isSelected: false};
      });
    } else {
      chooseArray = selectedTab.map((item, ind) => {
        return {...item, isSelected: true};
      });
    }

    setSelectedTab(chooseArray);
  };

  return (
    <View>
      <Genders
        genders={selectedTab}
        onPress={item => onGenderClick(item)}
        onChooseAll={onChooseAll}
        choose={chooseAll}
      />
    </View>
  );
};

export default Home;
