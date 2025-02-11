import { Extension } from "@tiptap/react";
import "tiptap-extension-text-style"

declare module "@tiptap/core" {
    // We're extending the existing Commands interface
    // ReturnType is a generic parameter that Tiptap uses to define what commands return
    interface Commands<ReturnType> {
        fontSize: {
            setFontSize: (size: string) => ReturnType;
            // Takes no parameters
            // Used to remove font size styling
            unsetFontSize: () => ReturnType;
        };
    }
}

export const FontSizeExtension = Extension.create({
    name: "fontSize",
    addOptions() {
        return{
            types : ["textStyle"],
        }
    },
    addGlobalAttributes(){
        return [
            {
                types: this.options.types,
                attributes: 
                {
                    fontSize: {
                        default: null,
                        parseHTML: element => element.style.fontSize,
                        renderHTML: attributes => {
                            if (!attributes.fontSize){
                                return{}
                            }
                                return {
                                style: `font-size: ${attributes.fontSize}`
                            }
                        }
                    }
                }
            }
        ]
    },
    addCommands(){
        return {
            setFontSize: (fontSize: string) => ({ chain}) => {
                return chain()
                .setMark("textStyle", {fontSize})
                .run()
            },
            unsetFontSize: () => ({chain}) => {
                return chain()
                .setMark("textStyle", { fontSize: null })
                .removeEmptyTextStyle()
                .run()
            },
        }
        }
    })