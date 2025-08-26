import React from 'react';
import {Search, Sun, Moon, UserRound} from "lucide-react";

const iconStyle = {
    width: '20px',
    height: '20px',
}

export const SearchIcon = () => <Search style={iconStyle}/>;

export const SunIcon = () => <Sun style={iconStyle}/>

export const MoonIcon = () => <Moon style={iconStyle}/>;

export const UserIcon = () => <UserRound style={iconStyle}/>;
