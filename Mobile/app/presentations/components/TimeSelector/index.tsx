import React, { useState, useEffect, FC } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';

import { styles } from './styles';
import {Theme} from '../../../resources/themes';

type TimeSelectorProps = {
    times: string[];
    initialValue?: string;
    onSelect?: (value: string) => void;
    activeColor?: string;
    containerStyle?: StyleProp<ViewStyle>;
};

const TimeSelector: FC<TimeSelectorProps> = ({
    times,
    initialValue,
    onSelect,
    activeColor = Theme.PRIMARY_COLOR,
    containerStyle,
}) => {
    const [selectedTime, setSelectedTime] = useState(initialValue || times[0]);

    useEffect(() => {
        if (initialValue) {
            setSelectedTime(initialValue);
        }
    }, [initialValue]);

    const handlePress = (item: string) => {
        setSelectedTime(item);
        onSelect?.(item);
    };

    const renderItem = ({ item }: { item: string }) => {
        const isSelected = item === selectedTime;
        const [time, period] = item.split(' ');

        return (
            <TouchableOpacity
                onPress={() => handlePress(item)}
                style={[
                    styles.timeItem,
                    isSelected && { backgroundColor: activeColor },
                ]}
            >
                <Text style={[styles.timeText, isSelected && styles.selectedText]}>
                    {time}
                </Text>
                <Text style={[styles.periodText, isSelected && styles.selectedText]}>
                    {period}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.containerTimes, containerStyle]}>
            <FlatList
                data={times}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.timeList}
            />
        </View>
    );
};

export default TimeSelector;

