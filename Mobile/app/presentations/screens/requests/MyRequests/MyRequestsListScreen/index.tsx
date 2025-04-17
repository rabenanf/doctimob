import React, { JSX, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../data/interface';
import AppLayout from '../../../../layout';
import { ProfilHeader } from '../../../../components/ProfilHeader';
import Photo from '../../../../../resources/assets/images/photo.png';
import { useTranslation } from 'react-i18next';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { RequestCard } from '../../../../components/RequestCard';

const ActiveRoute = () => {
    return (
    <ScrollView contentContainerStyle={styles.requestListContainer}>
        <RequestCard
            title="Recurring headaches after screen exposure"
            date="21 March 2025"
            time="09:30 AM"
            nbSeen={15}
            nbResponded={0} 
            type={'Video consultation'}                        />
        <RequestCard
            title="Skin rash consultation"
            date="22 March 2025"
            time="10:15 AM"
            nbSeen={10}
            nbResponded={2}
            type={'Video consultation'} 
        />
        <RequestCard
            title="Digestive discomfort evaluation"
            date="23 March 2025"
            time="11:00 AM"
            nbSeen={5}
            nbResponded={1}
            type={'Video consultation'} 
        />
    </ScrollView>
    )
}

const ExpiredRoute = () => {
    return (
    <ScrollView contentContainerStyle={styles.requestListContainer}>
        <RequestCard
            title="Recurring headaches after screen exposure"
            date="21 March 2025"
            time="09:30 AM"
            nbSeen={15}
            nbResponded={0} 
            type={'Video consultation'}                        />
        <RequestCard
            title="Skin rash consultation"
            date="22 March 2025"
            time="10:15 AM"
            nbSeen={10}
            nbResponded={2}
            type={'Video consultation'} 
        />
        <RequestCard
            title="Digestive discomfort evaluation"
            date="23 March 2025"
            time="11:00 AM"
            nbSeen={5}
            nbResponded={1}
            type={'Video consultation'} 
        />
    </ScrollView>
    )
}

const CancelledRoute = () => {
    return (
    <ScrollView contentContainerStyle={styles.requestListContainer}>
        <RequestCard
            title="Recurring headaches after screen exposure"
            date="21 March 2025"
            time="09:30 AM"
            nbSeen={15}
            nbResponded={0} 
            type={'Video consultation'}                        />
        <RequestCard
            title="Skin rash consultation"
            date="22 March 2025"
            time="10:15 AM"
            nbSeen={10}
            nbResponded={2}
            type={'Video consultation'} 
        />
        <RequestCard
            title="Digestive discomfort evaluation"
            date="23 March 2025"
            time="11:00 AM"
            nbSeen={5}
            nbResponded={1}
            type={'Video consultation'} 
        />
    </ScrollView>
    )
}

type Props = NativeStackScreenProps<RootStackParamList, 'MyRequestsList'>;

export const  MyRequestsListScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'active', title: t('MyRequestsList.active') },
        { key: 'expired', title: t('MyRequestsList.expired') },
        { key: 'cancelled', title: t('MyRequestsList.cancelled') },
    ]);
    
    const renderScene = SceneMap({
        active: ActiveRoute,
        expired: ExpiredRoute,
        cancelled: CancelledRoute
    });

    const renderTabBar = (props : any) => {
        return (
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route : any, i : number) => {
              const isFocused = props.navigationState.index === i;
              return (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.tabStyle,
                    isFocused ? styles.activeTab : styles.inactiveTab,
                  ]}
                  onPress={() => props.jumpTo(route.key)}
                >
                  <Text style={isFocused ? styles.activeLabel : styles.inactiveLabel}>
                    {route.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
    };

    return (
        <AppLayout> 
            <ProfilHeader photo={Photo} name={'Therèse Rabe'} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {t('MyRequestsList.title')} </Text>
                <Text style={styles.description}> {t('MyRequestsList.description')} </Text>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
            />
        </AppLayout>
    )
}
