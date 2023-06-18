import React from 'react';
import { useProfileStore } from '../../store';
import { TextInput } from 'react-native';
import { AuthService } from '../../services';

export const useEditProfile = () => {
  const { profile, setName } = useProfileStore();

  const textInputRef = React.useRef<TextInput>(null);

  const [newName, setNewName] = React.useState('');
  const [isEditing, setIsEditing] = React.useState(false);

  const onPressEdit = () => {
    if (isEditing === true && newName && newName !== profile.name)
      submitNewName();
    setIsEditing(prev => !prev);
    setTimeout(() => {
      textInputRef.current?.focus();
    }, 100);
  };

  const onChangeTextNewName = (text: string) => {
    setNewName(text);
  };

  const submitNewName = async () => {
    await AuthService.putName(newName);

    setName(newName);
  };

  return { textInputRef, profile, isEditing, onPressEdit, onChangeTextNewName };
};
