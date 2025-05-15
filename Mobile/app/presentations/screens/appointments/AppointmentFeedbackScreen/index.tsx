import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { Image, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from "./styles";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import { TitleHeader } from "../../../components/TitleHeader";
import Doctor from "../../../../resources/assets/images/doctor.png";
import { Rating } from "react-native-ratings";
import { RoundedButton } from "../../../components/RoundedButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentFeedback'>;

export const  AppointmentFeedbackScreen = ({navigation}: Props): JSX.Element => {

    const { t } = useTranslation();

    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }

    return (
        <AppLayout>
            <TitleHeader title={t('AppointmentFeedback.titleHeader')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {t('AppointmentFeedback.title')} </Text>
                <Text style={styles.description}> {t('AppointmentFeedback.description')} </Text>
            </View>
            <KeyboardAwareScrollView>
                <View style={styles.doctorCard}>
                    <Image source={Doctor} style={styles.avatar} />
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={styles.name}>{'Dr. '} {'Alice Jonah'}</Text>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{'Pediatrician'}</Text>
                            </View>
                        </View>
                        <View style={styles.review}>
                            <Text style={styles.reviewCount}>{'125'} {t('AppointmentFeedback.reviews')}</Text>
                            <View style={styles.rate}>
                                <Icon name="star" size={10} color="#000" />
                                <Text style={styles.rateText}> {'4.8'} </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Rating
                    type={'custom'}
                    ratingCount={5}
                    startingValue={0}
                    ratingColor={'rgba(255, 209, 1, 1)'}
                    ratingBackgroundColor={'white'}
                    imageSize={40}
                    onFinishRating={ratingCompleted}
                    style={styles.stars}
                />

                <View style={styles.feedback} >
                    <Text  style={styles.feedbackText}> { t('AppointmentFeedback.feedback') } </Text>
                    <TextInput multiline style={styles.feedbackInput} placeholder={t('AppointmentFeedback.feedbackPlaceholder')}/>
                </View>
            </KeyboardAwareScrollView>

            <View style={styles.btnContainer}>
                <RoundedButton 
                    isPrimary={true}
                    onButtonPress={ () => {}} 
                    textBtn={t('AppointmentFeedback.submit')}
                />
            </View>
        </AppLayout>
    )
}    
