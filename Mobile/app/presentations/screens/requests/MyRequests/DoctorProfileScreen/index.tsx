import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { SceneMap, TabView } from "react-native-tab-view";
import { styles } from './styles';
import { RootStackParamList } from "../../../../../data/interface";
import AppLayout from "../../../../layout";
import { TitleHeader } from "../../../../components/TitleHeader";
import Photo from '../../../../../resources/assets/images/doctor.png';
import nobody from '../../../../../resources/assets/images/nobody.svg';
import Briefcase from '../../../../../resources/assets/icons/Briefcase.svg';
import { Rating } from "react-native-ratings";
import ReviewCard from "../../../../components/ReviewCard";

type Props = NativeStackScreenProps<RootStackParamList, 'DoctorProfile'>;

const { t } = useTranslation();

const AboutRoute = () => {
    return (
        <View style={{flex : 1, paddingTop : 20}}>
            <Text style={{paddingBottom : 20}}>
            I am a highly experienced pediatrician with over 14 years of experience specializing in neonatology and infant nutrition. Passionate about child health, I am dedicated to providing expert care to newborns, infants, and young children. My patient-centered approach ensures each child receives personalized treatment and support for healthy growth.
            </Text>
            <View style={styles.experience}>
                <View>
                    <Briefcase />
                </View>
                <View>
                    <Text style={{fontSize: 16, fontWeight: 700}}> {t('DoctorProfile.work')} </Text>
                    <Text>
                    Senior Pediatrician at Saigon Children’s Clinic Former Neonatologist at Hue Central Hospital  14+ years of experience 
                    </Text>
                </View>
            </View>
        </View>
    )
}

const ReviewsRoute = () => {
    return (
        <View style={{flex : 1, paddingTop : 20}}>
            <View style={styles.rateReview}>
                <Text style={styles.rateReviewText}> {`4.8`} </Text>
                <View>
                    <Rating
                        type={'custom'}
                        ratingCount={5}
                        startingValue={4.8}
                        ratingColor={'rgba(255, 209, 1, 1)'}
                        ratingBackgroundColor={'white'}
                        imageSize={20}
                        readonly
                        //ratingImage={STAR}
                        // style={{backgroundColor : 'red'}}
                    />
                </View>
                <Text style={styles.reviews}>
                    {`120`} {' '} { t('DoctorProfile.reviews')}
                </Text>
            </View>
            <ScrollView style={{width : '100%'}}>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </ScrollView>
        </View>
    )
}

export const DoctorProfileScreen = ({ navigation }: Props): JSX.Element => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'about', title: t('DoctorProfile.about') },
        { key: 'reviews', title: t('DoctorProfile.reviews') },
    ]);

    const renderScene = SceneMap({
        about: AboutRoute,
        reviews: ReviewsRoute,
    });

    const renderTabBar = (props: any) => {
        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route: any, i: number) => {
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
            <TitleHeader title={t('DoctorProfile.title')} />
            <View style={styles.doctorContainer}>
                <View style={styles.profile}>
                    <Image source={Photo ? Photo : nobody} style={styles.image} />
                    <Text style={styles.name}> {'Dr. '} {'Robert Miller'} </Text>
                    <View style={{flexDirection : 'row', gap : 20, justifyContent: 'center' }}>
                        <Text style={styles.specialty}> {'Pediatrician'} </Text>
                        <View style={styles.rate}>
                            <Icon name="star" size={10} color="#000" />
                            <Text style={styles.rateText}> {'4.8'} </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.score}>
                    <View style={styles.scoreItem}>
                        <Text style={styles.scoreItemValue}>
                            {'14 years'}
                        </Text>
                        <Text style={styles.scoreItemLabel}>
                            {t('DoctorProfile.experiences')}
                        </Text>
                    </View>
                    <View style={styles.scoreSeparator}></View>
                    <View style={styles.scoreItem}>
                        <Text style={styles.scoreItemValue}>
                            {'456'}
                        </Text>
                        <Text style={styles.scoreItemLabel}>
                            {t('DoctorProfile.patients')}
                        </Text>
                    </View>
                    <View style={styles.scoreSeparator}></View>
                    <View style={styles.scoreItem}>
                        <Text style={styles.scoreItemValue}>
                            {'125'}
                        </Text>
                        <Text style={styles.scoreItemLabel}>
                            {t('DoctorProfile.reviews')}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, width: '100%', paddingTop : 40 }}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        renderTabBar={renderTabBar}
                        onIndexChange={setIndex}
                    />
                </View>
            </View>
        </AppLayout>
    )

}