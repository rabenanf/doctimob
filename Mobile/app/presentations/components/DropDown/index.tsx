import { useRef, useState, useEffect, JSX } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import ArrowDownIcon from '../../../resources/assets/icons/Arrow_Down.svg';

interface DropDownInterface {
    data: Array<string>;
    onSelect: (name: string) => void;
    name: string;
    label?: string;
    placeholder?: string;
    isError: boolean;
    checkValidity: (name: string) => void;
    defaultValue?: string;
    active?: boolean;
    loading?: boolean;
    scrollTo?: () => void;
    maxHeight?: number;
    isVisible?: boolean;
    setIsVisible?: (visible: boolean) => void;
}

export default function DropDown({
    data,
    onSelect,
    name,
    label,
    placeholder,
    isError,
    checkValidity,
    defaultValue,
    active = true,
    loading = false,
    isVisible,
    setIsVisible,
    scrollTo,
}: DropDownInterface): JSX.Element {
    const [isPlaceholder, setPlaceholder] = useState(true);
    const [text, setText] = useState(
        defaultValue || placeholder || 'Seléctionner une option',
    );
    useEffect(() => {
        if (defaultValue) {
            setText(defaultValue);
        }
    }, [defaultValue]);
    const iconRef = useRef<View>(null);

    const { t } = useTranslation();

    useEffect(() => {
        checkValidity(name);
    }, [isVisible]);
    const showDrop = async () => {
        // scrollTo && scrollTo();
        return Promise.resolve(true);
    };

    const handlePress = async () => {
        if (setIsVisible) {
            setIsVisible(!isVisible);
        }
        await showDrop();
    };

    const handleSelect = (name: string) => {
        if (setIsVisible) {
            setIsVisible(false);
        }
        setText(name);
        onSelect(name);
        setPlaceholder(false);
    };

    const handleOutsidePress = () => {
        if (setIsVisible) {
            setIsVisible(false);
        }
    };

    const colorBorder = isError ? 'red' : '#f0f0f0';

    const textButton: any = {
        color: '#BBBBBB'
    };

    const iconStyle: any = {
        height: 16,
        width: 16,
    };

    const iconArrowDown: any = {
        width: 8,
        height: 5,
        marginRight: 2,
    };
    return (
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
            <View style={styles.container}>
                {label && <Text style={styles.label}>{label}</Text>}
                <TouchableOpacity
                    onPress={handlePress}
                    style={[styles.dropdownHeader, { borderColor: colorBorder }]}
                    ref={iconRef}>
                    <Text
                        style={isPlaceholder ? styles.placeholder : styles.selectedText}>
                        {text}
                    </Text>
                    {active && (
                        <View
                            style={styles.touchableStyle}>
                            {/*<Image source={Icons.verticalLine} style={styles.line} />*/}
                            <ArrowDownIcon />
                        </View>
                    )}
                </TouchableOpacity>

                {isVisible && (
                    <View style={styles.dropdownContainer}>
                        <ScrollView nestedScrollEnabled={true}>
                            {loading ? (
                                <Text style={styles.itemText}>Loading...</Text>
                            ) : (
                                <>
                                    {data.map(item => (
                                        <TouchableOpacity
                                            key={item}
                                            onPress={() => handleSelect(item)}
                                            style={styles.dropdownItem}>
                                            <Text style={styles.itemText}>{item}</Text>

                                        </TouchableOpacity>
                                    ))}
                                </>
                            )}
                        </ScrollView>
                    </View>
                )}

                {isError && (
                    <Text style={[styles.error]}>{ }</Text>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}
