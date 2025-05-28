if(NOT TARGET react-native-reanimated::reanimated)
add_library(react-native-reanimated::reanimated SHARED IMPORTED)
set_target_properties(react-native-reanimated::reanimated PROPERTIES
    IMPORTED_LOCATION "/media/kennedy/3E509D70509D301F/ubuntuProject/doctimob/Doctimob/Mobile/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/4w3k5f2j/obj/armeabi-v7a/libreanimated.so"
    INTERFACE_INCLUDE_DIRECTORIES "/media/kennedy/3E509D70509D301F/ubuntuProject/doctimob/Doctimob/Mobile/node_modules/react-native-reanimated/android/build/prefab-headers/reanimated"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET react-native-reanimated::worklets)
add_library(react-native-reanimated::worklets SHARED IMPORTED)
set_target_properties(react-native-reanimated::worklets PROPERTIES
    IMPORTED_LOCATION "/media/kennedy/3E509D70509D301F/ubuntuProject/doctimob/Doctimob/Mobile/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/4w3k5f2j/obj/armeabi-v7a/libworklets.so"
    INTERFACE_INCLUDE_DIRECTORIES "/media/kennedy/3E509D70509D301F/ubuntuProject/doctimob/Doctimob/Mobile/node_modules/react-native-reanimated/android/build/prefab-headers/worklets"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

