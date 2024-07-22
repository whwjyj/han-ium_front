import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from '../components/Bstyles';
import {COLORS} from '../components/theme';


const TabItem = ({ tabId, currentTabId, setTabId, iconName, label }) => {
    return (
        <TouchableOpacity onPress={() => { setTabId(tabId) }}>
            <View style={[styles.tabIcon, {
                backgroundColor: currentTabId === tabId ? COLORS.accent : COLORS.primary
            }]}>
                <Icon name={iconName} size={25} color={COLORS.black} />
                <Text style={styles.tabText}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const BottomTabBar = () => {
    const [tabId, setTabId] = useState(0);
    return (
        <View style={styles.tabRow}>
            <TabItem tabId={0} currentTabId={tabId} setTabId={setTabId} iconName="home-outline" label="Home" />
            <TabItem tabId={1} currentTabId={tabId} setTabId={setTabId} iconName="newspaper-outline" label="뉴스소식" />
            <TabItem tabId={2} currentTabId={tabId} setTabId={setTabId} iconName="help-circle-outline" label="GPT" />
            <TabItem tabId={3} currentTabId={tabId} setTabId={setTabId} iconName="person-outline" label="마이페이지" />
        </View>
    );
};

export default BottomTabBar;
