{
    users:{
        XXX(userId):{
            uid:(uid)
            username:
            photoURL:
            email:
            lineID:
            phone:
            nickname:
            gender:
            age:
            description:
            profession:
            interests:
            faceScore:
            availabeTime:

        }
        ...
    }
    user-activities:{
        XXX(userId):{
            YYY(activityID):{
                activityName:x.name
                activityId:x.activityID
                gender: gender
                dateActivity:x.dateActivity
                dateMatch:x.dateMatch
                dateSignUp:x.dateSignUp
                confirmDate:
                movie:
                subject:x.subject
                location:'台北'
                status:0:報名完成,1:無匯款，取消場次,2:配對中,3:已錄取，接收簡訊,4:無錄取，配對失敗,5:退款中,6:活動結束
                accountLastFive:,
                userID:
        }

        ...
    }...
    }
    activity-users:{
        YYY(activityID):{
            XXX(userID){
            activityId: x.activityID,
            activityName:
            movie:,
            status:0,
            //0:報名完成,1:無匯款，取消場次,2:配對中,3:已錄取，接收簡訊,4:無錄取，配對失敗,5:退款中,6:活動結束,
            location:,
            userID: XXX(userID),
            username:,
            photoURL:,
            email:,
            lineID:,
            phone:,
            nickname:,
            gender:,
            age:,
            description:,
            profession:,
            interests:,
            faceScore:,
            availabeTime:,
            activityId:,
        }...
    }...

    // activitySignUpMember:{
    //      ActivityID(yyy):{
    //          台北：
    //                UserID(xxx):true
    //                ...
    //         高雄：
    //              UserID(xxx):true

    //         allmember:
    //              UserID(xxx):true

    //         },




    activities:{
          YYY(activityId):{
                    activityID:
                    index:
                    name:
                    subject:
                    date:
                    movie:
                    location:
                    status://0:不能報名,1:可以報名,2:結束了（不會顯示）
                }
        ...
        }
        ...
    }
    activitiesGroup:{
        Taipei(location):{
            YYY(activityId):{
                ZZZ(lineGroupId):{
                    boy:{
                        userId:
                        username:
                        photourl:
                        phone:
                        lineId:
                        age:
                    },
                    girl:{
                        userId
                        username:
                        photourl:
                        phone:
                        lineId:
                        age:
                    }
                    date:
                    commonMovie:
                    status-group://0:在群組中，還未約定時間,1:已約好時間,2:當天約會,3:約會完成
                }
                ...
            }
            ...
        }
        ...
    }
}
