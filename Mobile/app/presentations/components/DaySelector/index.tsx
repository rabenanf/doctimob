import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { styles } from './styles';

const getNextDays = (count: number) => {
    const days = [];
    const today = new Date();

    for (let i = 0; i < count; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
        const isToday = i === 0;
        const label = isToday ? 'Today' : dayName;
        const dayNumber = date.getDate();

        days.push({ date, label, dayNumber });
    }

    return days;
};

type DaySelectorProps = {
    daysCount?: number;
    onSelect?: (date: Date) => void;
    selectedDate?: Date;
};

const DaySelector: React.FC<DaySelectorProps> = ({ daysCount = 14, onSelect, selectedDate }) => {
    const [selected, setSelected] = useState( selectedDate ? selectedDate.toDateString() : new Date().toDateString());

    const days = getNextDays(daysCount);

    const handleSelect = (date: Date) => {
        setSelected(date.toDateString());
        onSelect?.(date);
    };

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={days}
            keyExtractor={(item) => item.date.toISOString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => {
                const isSelected = item.date.toDateString() === selected;

                return (
                    <TouchableOpacity
                        onPress={() => handleSelect(item.date)}
                        style={[styles.card, isSelected && styles.selectedCard]}
                    >
                        <Text style={[styles.label, isSelected && styles.selectedLabel]}>
                            {item.label}
                        </Text>
                        <Text style={[styles.day, isSelected && styles.selectedDay]}>
                            {item.dayNumber}
                        </Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default DaySelector;