
class ChatService {
    getChats = () => {
        return [
            {
                uuid: "12412dast21e",
                title: "Ваня Петрович",
                unreadCount: 0
            },
            {
                uuid: "124sdg2312",
                title: "Клоун Сергей",
                lastMessage: {
                    text: "Привет, я клоун!"
                },
                unreadCount: 4
            },
        ];
    }
}

const chatService = new ChatService();

export default chatService;
