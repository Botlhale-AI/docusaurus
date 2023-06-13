# Custom Functions

Introducing our state-of-the-art bot builder platform, designed to empower you with the capabilities of natural language processing (NLP) and enhance your conversational AI solutions. As part of our commitment to delivering a truly tailored experience, we are delighted to offer a range of custom functions (some preset/predefined, some customizable) that will revolutionize the way your bots interact with your end users and/or customer. Custom functions enable you to create personalized and dynamic conversational flows, allowing your bots to understand user intents, extract key information, and generate intelligent responses. With our platform, you can effortlessly integrate custom functions to perform tasks such as third party integrations, hitting end-points on a server, processing specific documents, and much more. These functions not only streamline the user experience but also provide you with invaluable insights and increased efficiency. We are excited to bring you this cutting-edge technology and invite you to explore the endless possibilities it offers.

![actions dasboard](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/actions-dashboard.png)
![actions dasboard error](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/actions-dashboard-error.png)
![actions dasboard success](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/actions-dashboard-success.png)

````
class ResetAllSlots(Action):
    def name(self) -> Text:
        return "action_reset_all_form_items_preset"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        return [AllSlotsReset()]

#beginhandlingfiles
class ActionHandleImage(Action):
    def name(self) -> Text:
        return "action_handle_image"
    async def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any],) -> List[EventType]:
      # intent= tracker.latest_message[‘intent’].get(‘name’)

      img_url = tracker.latest_message['text'][22:-2]
      url = "https://hmsa.zendesk.com/api/v2/tickets?API_TOKEN=kfz5uygbXuUY1BArFuvz5RmLekQ04A5S9pTnL6fW"
      
      payload = json.dumps(
            {
                "ticket": 
                    {
                        "subject": "WhatsApp Chatbot - Stock Request (Image Attached)", 
                        "comment": {"body": "Stock Request with Image Attached"},
                        "priority": "high",
                        "tags": "tag",
                        "type": "task",
                      	"email_ccs": [
                        # { "user_id": "562624", "action": "put" },
                        { "user_email": "athi@botlhale.ai", "user_name": "Additional Email", "action": "put"},
                        { "user_email": "claudia.southgate@hm.com", "user_name": "H&M Team Member", "action": "put"}
                      ],
                      "comment": {
                		"body": f"Please find the attached image.\nClick here to download image: {img_url}"
                      },
                      "tags": ["image"],
                      "uploads": [
                          {
                              "filename": "image_path",
                              "content_type": "image/jpeg",
                              "data": "image_data"
                          }
            ]
                    }
            }
        )

      headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic YXRoaUBib3RsaGFsZS5haTojR3VkZGFiYjExMQ==',
  'Cookie': '__cfruid=8aec605012b96541fd8498f62e68685556054667-1685959857; __cfruid=1a5e38ce20f7b8c45d5d9cf52fb3e86cc65e7dbc-1686037392; _zendesk_cookie=BAhJIhl7ImRldmljZV90b2tlbnMiOnt9fQY6BkVU--459ed01949a36415c1716b5711271c3d08918307'
}


      response = requests.request("POST", url, headers=headers, data=payload)
      
      
      from rasa_sdk.events import ActionExecuted, UserUttered
      
      data = {
                  "intent": {
                      "name": "after_image_upload",
                      "confidence": 1.0,
                  }
      		}
      return [
                  ActionExecuted("action_listen"),
                  UserUttered(text="/after_image_upload", parse_data=data),
      		]
    # dispatcher.utter_message(text = str(tracker.latest_message))
          
class ActionHandlePDF(Action):
    def name(self) -> Text:
       	return "action_handle_pdf"
    async def run(
            self,
            dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any],
        ) -> List[EventType]:
            dispatcher.utter_message(text="Hi, unfortunately, I do not process pdf files.")
            #dispatcher.utter_message(text=str(tracker.latest_message))
#endhandlingfiles
 
class ActionGreet(Action):
    def name(self) -> Text:
        return "action_greet"
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        print('action_greet...')
        
        # get user number
        sessionID_payload = {"sender_id":tracker.sender_id}
        check_contact_payload = {"sender_id":tracker.sender_id}
        platform = 'whatsapp' #requests.post('https://app.botlhale.xyz/check_platform', platform_payload).content.decode('utf-8')
        actual_contact = requests.post('https://whatsapp.botlhale.xyz/getuserid', sessionID_payload).content.decode('utf-8')
        
        whatsapp_user_name = requests.post('https://whatsapp.botlhale.xyz/getusername', {"number": actual_contact}).content.decode('utf-8')
        
        verification_url = "https://app-dev.botlhale.xyz/hm/verify_user/"

        verification_response = None
        verification_body   = {'number': actual_contact, 'task':"verify_user"}
        params = {}
        header = {}
        verification_response = requests.post(verification_url, verification_body, header)

        if verification_response.json()['status']==False: # user greeting for the first time
            print("present terms")
            message_to_customer = "Hello, *" + whatsapp_user_name + "*!\n\nWelcome to H&M South Africa. My name is *Hennes*, I am a CHATBOT, and I am here to assist you. You can interact with me through text or through speech (voice notes).\n\n Send *Hi* to go back to the main menu."
            
            buttons = [{"title":"View Terms", "payload":"/view_terms"}, {"title":"Accept Terms", "payload":"/accept_terms"}, {"title":"Decline Terms", "payload":"/decline_terms"}]
            dispatcher.utter_message(text=message_to_customer, buttons=buttons)

        else:
          print("hey, great to have you back!")
          message_to_customer = "Hello, *" + whatsapp_user_name + "*!\n\nWelcome to H&M South Africa. My name is *Hennes*, I am a CHATBOT, and I am here to assist you. You can interact with me through text or through speech (voice notes)."
          buttons = [{"title":"Main Menu", "payload":"/main_menu"}]
          dispatcher.utter_message(text=message_to_customer, buttons=buttons)
          
        return []
 
class ActionCheckTradingHours(Action):
    def name(self) -> Text:
        return "action_check_trading_hours"
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        print('action_check_trading_hours...')
        
        store_city = tracker.slots.get('choose_city')
        store_city = store_city.replace('/','')
        store_city = store_city.replace(' ','-')
        store_city = store_city.lower()
        #store_city = store_city.replace(' ', '')
        store_name = tracker.slots.get('choose_store')
        store_name = store_name.replace('/','')

        # store-locator config-info
        url = f"https://www.hm.com/za/store-locator/south-africa/{store_city}/{store_name}"
  
        payload = {}

        headers = {
            'Cookie': 'HMCORP_locale=en_US; HMCORP_locale_autoassigned=true; HMCOUNTRY_name=United States; _abck=24FDDFA18261EA7F279DC8286F2C5E31~-1~YAAQIWdNaMJs3ayFAQAAGHLsvgkcCtRhj5bvX78LPzYs8hpwYnE5Pm9B6F14LRS4g1QlX4asMUvYlFcbNMdfM2QMR7o2xifflgHIMyx3EOFOp1NU8R4HrmWvuXZAESeZZVE304pnW8Bh0ferQmbydSmjd6aqLvG3ciNczIG8LOrIn00ZI6GB5FGVDi4u8eP0DWm2Cg1z0pI6qDD9kTQ7pIrLu+qg2KzzJGg415HD2yj6aNnlDFbPLNf9af1yy0uExGqBA2kfC5e1CPW3kf0j+W0GaNl6OR5OiP0cOHnrvBHz3RRsythLaoRgyXrXsn2wZ+Oih5B6RY052p5ddtLpaiXq3e7zU5DMlJ9NY7sm6sqGWZH0yA==~-1~-1~-1; ak_bmsc=336981498807787967D6E9BF57DEAE90~000000000000000000000000000000~YAAQb+4uF8KAzKuFAQAAdp32vhJNegEQkxZSBRgvCo8rUB/0J5Pbu3YFF1KdI/srI248AaCCB3/p1Cn/bzE8Lup54U5aoMtkdlgw1rIQhF3ARvQPLvl24mzn/0ILdA7pMZYhW15tmEUPMTqzbvv6bZxqA1Lxop++fnohClzHNVlnRYis9iWaMw1yDe1kf/ZHaiTVeDhC8XEkREf/KXXbeeUuJsxb8+xooDTuiZZV0YAwLgGcCKhgffsX0yHEG2XZh/Aa91z2+dDt56LNacl1yPrTs/xZspLVJKefVrAdBJBNJ8ViE1liPxEy158cKN2DPIXsNIxhXIDu51UxwwrPnFaOa3YgfODb9lJmghRcsYeyjMIkQCcr; bm_mi=1D4D588B115D81B87057848EE055EC27~YAAQb+4uF3+RzKuFAQAAgQX5vhKTUceN6sF9zjhU+Vmy6rEHJtY8TrXsj2owpbzz/snXr5ZWneiRmXthJrZgyXAeDuRdko/Reb9N9cAP1kESCEHFuSaVXR4+DnQHXJv0OO0yn//CQylmwE2njbIJHQj3EkT820a6jBTzSA7+xVI7PAEJcK56Gtr0QvbF6f60lVIjzoQ8dyFhHWr0eNj6/w2YxQSXy57xQ1/5cm45UKK9nEbaHACaepEbS5GGCZkIovghNqE0des8K237lQ1cnBD/S1+FAWZauGrys/ou5M0lmNvk4plaogIYMNKe+cYx5B3RcB+hlNFkeCIHV+JK+tXVVH3OUAXPZrZmXN1HZAqD+kaEbOSviSP8G0GrWBFvndHP71etScowqQ==~1; bm_sv=1CCF0C9ED9BFDA47B0EC4CCC2FE5A7AC~YAAQb+4uF4CRzKuFAQAAgQX5vhL+wi8xCOdhODrv4EqkqwrY+cZqmIo2PLF+7JpIcDDtQHZdRB4wsx/UWoK2gxHQrS81I3zkq3mAZ3ufEP3n8HtYoojvPAb5BwkZLYbFPav0Yxd3TSfP8fYlHG3LyelqfZjFAscw4SvgKqq/xYJC6d/Q6d6DHSa1eRJiDGV0vQgZ5dD/kQuvnClXUUMAXgL4godk1ktefjMHwbzS0eYxnCu9jWv1feQi1mU=~1; bm_sz=EE895B8175ADDB8843F0BEBED664882A~YAAQIWdNaMNs3ayFAQAAGHLsvhIn0PTphS6AnOT7UK7BZRidurEpyGhlAD1sbInkbFKcdBH01sgaOTCKaNGUqqBhuARBkx4Rs5Wz2+2HNLcCKL+3vUJNQsE7dI6vdws0ONwa+vpYgr07hokSJKDzj2+RldWRSvDarcB6agONnvtbeYU8Ie+Ls/VEe3kSEL7YOHq9ywnAo/kSFm89TxXSQmspq8un6bVnctXrHkUdYJCR64EWeeKvwMn5xPNcfjrYE+AGDBSoVpjmQb56UBlw5CmyaeSNpQr9JgJzTfHdwA==~3228211~3224120; ARRAffinity=6bd50489cc791ea1ae55225c0ec2598308fd3113beeb7ca4800977de19a680d6; ARRAffinitySameSite=6bd50489cc791ea1ae55225c0ec2598308fd3113beeb7ca4800977de19a680d6; VtexWorkspace=master%3A-; akavpau_www2_en_us=1673946552~id=7c8b8c623438ae5211577c96d77f9673; qtrans_front_language=za',
            'Host': 'www.hm.com',
            'User-Agent': 'Chrome v22.2 Linux Ubuntu',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'X-Requested-With': 'XMLHttpRequest'
        }
        #buttons = [{"title": "Back to Menu","payload": '/main_menu',}]
        buttons = [{"payload": "/main_menu", "title": "Back to Menu"},]
        message_to_user = ""
        
        try:
          response = requests.request("GET", url, headers=headers, data=payload)
          
          html_doc = response.content
          html_content = BeautifulSoup(html_doc, 'html.parser') # parse html response as readable info
          soup_table = html_content.table # extract table from html response into a dictionary
          
          opening_hours = {}
          day  = ""
          times = ""
          
          for row in soup_table.findAll('tr'):
              print("ROW",row)
              aux = row.findAll('td')

              day = aux[0].string
              opening_hours[day] = aux[1].text

          dispatcher.utter_message(text=f"*{store_name.upper()} ({store_city.upper()}) TRADING HOURS*")
          
          for item in opening_hours:
            message_to_user = str(item)+" : "+str(opening_hours[item])
            dispatcher.utter_message(text=message_to_user)
          dispatcher.utter_message(text=f"\n_More info about {store_name.upper()} on Store Locator: "+str(url)+"_")

        except:
          result = False
          message_to_user = f"Something went wrong with retrieving the trading hours of the {store_name} store, please try again by *selecting one of the listed options under stores*."
          dispatcher.utter_message(text=message_to_user, buttons = buttons)
        
        finally:
          dispatcher.utter_message(text="", buttons = buttons)
          
        
        return [] 
      

    
 
class ActionViewTerms(Action):
    def name(self) -> Text:
        return "action_view_terms"
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        print('action_view_terms...')
        
        try:
            payload = {
                  'type': 'document', # document/image/video
                  'link': 'https://botlhale-ai-assets.s3.amazonaws.com/hm_terms.pdf',
                  'caption': 'Terms',
                  'filename': 'Terms.pdf' # only include when type == document
                }
            # accept or decline terms
            buttons = [{"title": "Accept", "payload": "accept_terms"}, 
                        {"title": "Decline", "payload": "decline_terms"}]
            dispatcher.utter_message(text="Please find the terms and conditions attached or you can view them on https://www.hm.com/za/ ",json_message=payload, buttons=buttons)
            
        except:
          response = 'Something went wrong, please type *hi* to resume.'
          dispatcher.utter_message(text=response)
        
        return []
# action for store_names below

class AskForSlotAction(Action):
    def name(self) -> Text:
        return "action_ask_choose_store" # confirm the name here on domain.yml responses

    def run(
        self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict
    ) -> List[EventType]:
        store_city = tracker.slots.get('choose_city')
        store_city = store_city.replace('/','')
        
        print("STORE_CITY VALUE: ", store_city)
        #dispatcher.utter_message(text="inside slot action: city : "+store_city)
        
        buttons = {
            "Bloemfontein": [
            {"payload": "loch-logan-waterfront", "title": "Loch Logan Waterfront"}, 
           
        ],
            "Cape Town": [
            {"payload": "canal-walk-shopping-centre", "title": "Canal Walk Shopping Centre"}, 
            {"payload": "cavendish-square","title": "Cavendish Square"},
            {"payload": "eikestad-mall", "title": "Eikestad Mall"}, 
            {"payload": "somerset-mall", "title": "Somerset Mall"}, 
            {"payload": "table-bay-mall", "title": "Table Bay Mall"}, 
            {"payload": "victoria-alfred-waterfront", "title": "Victoria & Alfred Waterfront"}, 
            {"payload": "tygervalley-shopping-center", "title": "Tygervalley Shopping Center"},   
        ],
            "Durban": [
            {"payload": "gateway-theatre-of-shopping", "title": "Gateway Theatre of Shopping"},
            {"payload": "the-pavilion", "title": "The Pavilion"},
            {"payload": "ballito-junction", "title": "Ballito Junction"},
            {"payload": "ballito-junction-kids", "title": "Ballito Junction Kids"},
        ],
            "East London": [
            {"payload": "vincent-park", "title": "Vincent Park"}, 
        ],
            "Johannesburg": [
            {"payload": "clearwater-mall", "title": "Clearwater Mall"}, 
            {"payload": "cresta-shopping-centre", "title": "Cresta Shopping Centre"},
            {"payload": "east-rand-mall", "title": "East Rand Mall"},
            {"payload": "eastgate-shopping-centre", "title": "Eastgate Shopping Centre"},
            {"payload": "fourways-mall", "title": "Fourways Mall"},
            {"payload": "mall-of-africa", "title": "Mall of Africa"},
            {"payload": "mall-of-the-south", "title": "Mall of the South"},
            {"payload": "rosebank-mall", "title": "Rosebank Mall"},
            {"payload": "sandton-city", "title": "Sandton City"},
            {"payload": "westgate-shopping-centre", "title": "Westgate Shopping Centre"}
        ],
            "Nelspruit": [
            {"payload": "ilanga-mall", "title": "Ilanga Mall"}, 
        ],
            "Polokwane": [
            {"payload": "mall-of-the-north", "title": "Mall of the North"}, 
        ],
            "Port Elizabeth": [
            {"payload": "walmer-park", "title": "Walmer Park"}, 
        ],
            "Pretoria": [
            {"payload": "centurion-mall", "title": "Centurion Mall"},
            {"payload": "menyln-park", "title": "Menyln Park"},
        ],
            "Richards Bay": [
            {"payload": "boardwalk-mall", "title": "Boardwalk Mall"},
        ],
            "Witbank": [
            {"payload": "highveld-mall", "title": "Highveld Mall"},
        ],
}

        '''
        if store_city == "Other":
            dispatcher.utter_message(text="Please tell us what province/district you live in.")
        else:
            print(buttons[store_city])
            dispatcher.utter_message(text="Please select your store_city.", buttons=buttons[store_city])
        ''' 
        
        print(buttons[store_city])
        
        dispatcher.utter_message(text="Select the name of the *store*:", buttons=buttons[store_city])
        
        return []
 
class ActionSendFeedbackToZendesk(Action):
    def name(self) -> Text:
        return "action_send_feedback_to_zendesk"
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        print('action_send_feedback_to_zendesk...')
        
        customer_name = tracker.slots.get("customer_name")
        customer_email = tracker.slots.get("customer_email")
        customer_feedback_category = tracker.slots.get("category")
        customer_feedback_category = customer_feedback_category.replace(' ', '-')
        customer_feedback = tracker.slots.get("actual_feedback")
        
        message_to_user = "Thank you, "+customer_name+"! \nWe have received your feedback. We will follow up accordingly."    

        url = "https://hmsa.zendesk.com/api/v2/tickets?API_TOKEN=kfz5uygbXuUY1BArFuvz5RmLekQ04A5S9pTnL6fW" #7e5ohEU5g1jjzNE6kezgRBkGqyoKPkRZDTOsztTU

        payload = json.dumps(
            {
                "ticket": 
                    {
                        "subject": "WhatsApp Chatbot - Customer Feedback: "+str(customer_feedback_category), 
                        "comment": {"body": customer_feedback},
                        "priority": "high",
                        "tags": customer_feedback_category,
                        "type": "task",
                      	"email_ccs": [
                        # { "user_id": "562624", "action": "put" },
                        { "user_email": "athi@botlhale.ai", "user_name": "Additional Email", "action": "put"},
                        { "user_email": "claudia.southgate@hm.com ", "user_name": "H&M Team Member", "action": "put"}
                      ]
                    }
            }
        )

        headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic YXRoaUBib3RsaGFsZS5haTojR3VkZGFiYjExMQ==',
  'Cookie': '__cfruid=8aec605012b96541fd8498f62e68685556054667-1685959857; __cfruid=1a5e38ce20f7b8c45d5d9cf52fb3e86cc65e7dbc-1686037392; _zendesk_cookie=BAhJIhl7ImRldmljZV90b2tlbnMiOnt9fQY6BkVU--459ed01949a36415c1716b5711271c3d08918307'
}


        response = requests.request("POST", url, headers=headers, data=payload)

        print(response.text)
        
        dispatcher.utter_message(text=message_to_user)
        
        return []
 
class ActionViewProductNumber(Action):
    def name(self) -> Text:
        return "action_view_product_number"
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        print('action_view_product_number...')
        payload = {
                  'type': 'image', # document/image/video
                  'link': 'https://botlhale-ai-assets.s3.amazonaws.com/product_number.jpeg',
                  'caption': '',
                  'filename': 'ProductNumber.pdf' # only include when type == document
                }
        dispatcher.utter_message(text="*PRODUCT NUMBER EXAMPLE:*",json_message=payload)
        return []

class ActionTriggerLiveAgent(Action):
    def name(self) -> Text:
        return "action_trigger_live_agent"
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        print('action_trigger_live_agent...')
        from rasa_sdk.events import ActionExecuted, UserUttered
        data = {
                  "intent": {
                      "name": "human_handoff",
                      "confidence": 1.0,
                  }
      		}
        return [
                    ActionExecuted("action_listen"),
                    UserUttered(text="/human_handoff", parse_data=data),
              ]
 
class ActionVerifyTerms(Action):
    def name(self) -> Text:
        return "action_verify_terms"
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        print('action_verify_terms...')
        # get user number
        sessionID_payload = {"sender_id":tracker.sender_id}
        check_contact_payload = {"sender_id":tracker.sender_id}
        platform = 'whatsapp' #requests.post('https://app.botlhale.xyz/check_platform', platform_payload).content.decode('utf-8')
        actual_contact = requests.post('https://whatsapp.botlhale.xyz/getuserid', sessionID_payload).content.decode('utf-8')
        
        whatsapp_user_name = requests.post('https://whatsapp.botlhale.xyz/getusername', {"number": actual_contact}).content.decode('utf-8')
        
        verification_url = "https://app-dev.botlhale.xyz/hm/verify_user/"

        verification_response = None
        verification_body   = {'number': actual_contact, 'task':"add_user"}
        params = {}
        header = {}
        verification_response = requests.post(verification_url, verification_body, header)
        return []
 
class ActionSendFeedbackToGsheets(Action):
    def name(self) -> Text:
        return "action_send_feedback_to_gsheets"
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        print('action_send_feedback_to_gsheets...')
        
        # get user number
        platform_payload = {"org":"HM", "session_id":tracker.sender_id}
        check_contact_payload = {"sender_id":tracker.sender_id}
        platform = 'whatsapp'#requests.post('https://app.botlhale.xyz/check_platform', platform_payload).content.decode('utf-8')
        actual_contact = requests.post('https://'+platform+'.botlhale.xyz/getuserid', check_contact_payload).content.decode('utf-8')
        
        response = requests.post('https://app-dev.botlhale.xyz/save_hm_survey_data', { "number": actual_contact, "score": tracker.slots.get("service_score"), "feedback": tracker.slots.get("feedback_for_the_agent")}).content.decode('utf-8')
        
        from rasa_sdk.events import ActionExecuted, UserUttered
      
        data = {
                    "intent": {
                        "name": "main_menu",
                        "confidence": 1.0,
                    }
              }
        return [
                    ActionExecuted("action_listen"),
                    UserUttered(text="/main_menu", parse_data=data),
              ] 
#begin-handoff
class ValidateContactForm(FormValidationAction):
    def name(self) -> Text:
        return "validate_contact_form"
    def validate_name(
        self,
        slot_value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: DomainDict,
    ) -> List[EventType]:
        if slot_value.lower().islower():
            return {"name": slot_value}
        else:
            dispatcher.utter_message(text = "I didn't quite get that. Please provide a name.")
            return {"name": None}
    
    def validate_email(
        self,
        slot_value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: DomainDict,
    ) -> List[EventType]:
        if slot_value.lower().islower():
            return {"email": slot_value}
        else:
            dispatcher.utter_message(text = "I didn't quite get that. Please use a valid email address.")
            return  {"email": None}
class ActionHandoffOptions(Action):
    def name(self) -> Text:
        return "action_handoff_options_preset"
    async def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> List[EventType]:
        organisation = "DemoOrganisation"
        
        departments = json.loads(requests.get('https://app.botlhale.xyz/get_departments',data=json.dumps({'org':organisation})).content.decode('utf-8'))['departments']
        handoff_department_options = []
        for department in departments:
            button = {
                    "title": department,
                    "payload": '/trigger_handoff{"department":'+f'"{department}"'+'}',
                }
            handoff_department_options.append(button)
        buttons = handoff_department_options
    
        
        dispatcher.utter_message(text='What department would you like me to connect you to?', buttons=buttons)
        return []
class ActionHandoff(Action):
    def name(self) -> Text:
        return "action_handoff_preset"
    async def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> List[EventType]:
        department = tracker.slots.get("department")
        dispatcher.utter_message(text="I have put you on the queue. You will be connected to the next available agent. To leave the queue, send 'disconnect'.", json_message={"department": department})
        return [SlotSet('department', None)]
class ActionCheckContactList(Action):
    def name(self) -> Text:
        return "action_check_contact_list_preset"
    async def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> List[EventType]:
        organisation = "DemoOrganisation"
        platform = requests.post('https://app.botlhale.xyz/check_platform', {"org":organisation, "session_id":tracker.sender_id}).content.decode('utf-8')
        actual_contact = requests.post('https://'+platform+'.botlhale.xyz/getuserid', {"sender_id":tracker.sender_id}).content.decode('utf-8')
        response = json.loads(requests.post('https://app.botlhale.xyz/contact_list', { "task": "check_from_actions", "session_id": actual_contact, "organisation": organisation}).content.decode('utf-8'))
        found    = response["found"]

        if not found:
            details = [FollowupAction('contact_form')]
            return details
    
class SubmitContact(Action):
    def name(self) -> Text:
        return "action_submit_contact"
    async def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> List[EventType]:
        organisation = "DemoOrganisation"
        name = tracker.slots.get("name")
        email = tracker.slots.get("email")
        language = "English"
        platform = requests.post('https://app.botlhale.xyz/check_platform', {"org":organisation, "session_id":tracker.sender_id}).content.decode('utf-8')
        actual_contact = requests.post('https://'+platform+'.botlhale.xyz/getuserid', {"sender_id":tracker.sender_id}).content.decode('utf-8')
        response = requests.post('https://app.botlhale.xyz/contact_list', { "task": "create_from_actions", "session_id": actual_contact, "organisation": organisation, "name":name, "email":email, "platform":platform, "language":language}).content.decode('utf-8')
        return []
#end-handoff
````


:::info Human HandOff Integration to External Parties
:::

## Human Handoff Integration

The Botlhale NLP Toolkit has a predefined dialogue that can be selected to enable the human handoff feature. See the [Dialogue Manager](https://github.com/Botlhale-AI/documentation/blob/master/docs/0%20-%20Platform/bot-builder/3%20-%20Dialogue%20Manager.md#create-preset-dialogues) section of this documentation for information on how to enable this preset dialogue.

The human handoff dialogue contains the following two dialogue streams: 

- provide_handoff_options 
- execute_handoff 

These two dialogues work off the shell and do not require any modifications. 

The human handoff capability uses [Socket.IO](https://socket.io/docs/v3/), a library that allows message passing between a server and multiple clients. All chatbots with human handoff set up need to connect to Botlhale AI's [Socket.IO server](https://app.botlhale.xyz/live_server)

The following code snippets can be used to set up socket IO, as well as event listener and emitter functions to interface with Botlhale AI's Socket.IO server. The code snippets use JavaScript. However, if your bot is integrated in a non-JavaScript environment, there are several client implementations available in other languages. See the [Socket.IO documentation](https://socket.io/docs/v3/) for additional information.

```js
<script src="https://cdn.socket.io/3.1.3/socket.io.min.js" 
integrity="sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh" crossorigin="anonymous"></script>

// SOCKET IO initialisation !
const socket = io.connect('https://app.botlhale.io/live_agent', {autoConnect: false});

// first time connecting to the main socket !
socket.on('startConversation', function() {
   socket.emit('username', {
       "ConversationID": ConversationID,
       "BotID": BotID
   });
});
 
// receiving a message !
socket.on('to_user', function(data) {
   let text = data.message;
   setBotResponse(text);
});
 
// send messages to clients !
socket.on('messages', function(data) {
   let messages = []
   // populate messages variable with user-bot conversation !
   // each element in the array must have the following format:
   // {'sender': String, 'message': String}
   // if message belongs to the user, then the value of 'sender' must be 'user'
   // if message belongs to the bot, then the value of 'sender' must be 'bot'
   socket.emit('messages_to_client', {
       "messages": messages,
       "bot_id": BotID
   });
});
 
// disconnecting socket !
socket.on('disconnect_socket', function(data) {
   socket.disconnect();
});

 // Sending a message
if (socket.connected) {
  // Send a message to socket 
   socket.emit('from_user', {
       "message": message,
       "ConversationID": ConversationID,
       "BotID": BotID
   });
 
} else {
  // Send a message bot
}

```


:::info
> We are here to help! Please email support@botlhale.ai with any questions.
:::
