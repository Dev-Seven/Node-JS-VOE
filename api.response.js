const messages = {
  english: {
    error: 'Something went wrong.',
    success: 'Success.',
    auth_fail: 'Authentication failed.',
    signup_success : 'Signup successful.',
    username_exists : 'Username already exists',
    signin_success: 'You are logged in successfully.',
    logout_success: 'Logout Success.',
    invalid_cred : 'You have entered an invalid email or password.',
    all_req : 'All input is required.',
    Email_already_use : 'Email Id is already used.',
    profile_updated : 'Profile has been updated successfully.',
    organization_create : 'Organization has been added successfully.',
    event_create : 'Event has been added successfully.',
    organization_delete : 'Organization has been deleted successfully.',
    no_events : 'No events available on this id.',
    event_delete : 'Event has been deleted successfully.',
    event_updated : 'Event has been updated successfully.',
    speaker_add : 'Speaker has been added successfully.',
    sponsor_add : 'Sponsor has been added successfully.',
    speaker_updated : 'Speaker has been updated successfully.',
    sponsor_updated : 'Sponsor has been updated successfully.',
    organization_updated : 'Organization has been updated successfully.',
    stage_add : 'Stage has been added successfully.',
    stage_updated : 'Stage has been updated successfully.',
    partner_add : 'Partner has been added successfully.',
    partner_updated : 'Partner has been updated successfully.',
    user_reg_success : 'User has been successfully registered for event.',
    event_already_sch : 'There is already a Event scheduled at this time with above organization id.',
    key_stored : 'Keys has been stored successfully.',
    key_updated : 'Keys has been updated successfully.',
    api_key_exists : 'Provided API key already exists.',
    api_secret_exists : 'Provided API secret key already exists.',
    token_exists : 'Provided token already exists.',
    msg_eve_add : 'Message has been added successfully for Event.',
    msg_spea_add : 'Message has been added successfully for Speaker.',
    msg_spo_add : 'Message has been added successfully for Sponsor.',
    agenda_already_sch : 'Agenda already scheduled at this time.',
    agenda_sch : 'Agenda has been scheduled successfully.',
    booth_add : 'Booth has been added successfully.',
    field_add : 'Field has been added successfully.',
    event_approved : 'Event has been approved successfully.',
    no_user : 'No user has been exist with above email address.',
    org_cred_send : 'Organization has been added successfully.',
    post_create : 'Post has been created successfully on event feed.',
    post_updated : 'Post has been updated successfully on event feed.',
    sponsor_create : 'Sponsor has been added successfully.',
    speaker_create : 'Speaker has been added successfully.',
    expo_create : 'Expo has been added successfully.',
    partner_create : 'Partner has been added successfully.',
    table_create : 'The table has been created successfully.',
    key_already_exists : 'Provided keys already exists.',
    provide_valid : 'Please provide a valid capacity seat i.e. 2, 4 & 6.',
    table_updated : 'Lounge table has been updated successfully.',
    event_dec : 'Event has been deactivated successfully.',
    session_add : 'Session has been added successfully.',
    session_updated : 'Session has been updated successfully.',
    expo_updated : 'Expo has been updated successfully.',
    agenda_updated : 'Scheduled agenda has been updated successfully.',
    b_sponsor_upload : 'Bulk Sponsors have been uploaded successfully.',
    provide_time : 'Please provide starts_at and ends_at time.',
    time_cannot : 'Start time and End time cannot be same.',
    org_approved : 'Organization has been activated successfully.',
    org_dec : 'Organization has been deactivated successfully.',
    cus_field_updated : 'Custom field has been updated successfully.',
    seq_update : 'Sequence has been updated successfully.',
    custm_field_n : 'Custom field does not exist with above Event Id.',
    accout_dec : 'Account has been deactivated.',
    spe_alr_use : 'Speaker Email Id is already used.',
    email_alr_ext_event : 'Email Id is already used with above Event Id.',
    email_alr_ext_event_id : 'Email Id is already used with above Eventid.',
    nuser_ext : 'User has been not created with entered email and password.',
    pwd_chg : 'Password has been sent to your registered email address.',
    time_cntt : 'End date time should be higher than start date time.',
    evt_dlt : 'Event has been deleted successfully.',
    evt_cnt : 'First deactivate the event and then after you can delete it.',
    spe_dlt : 'Speaker has been deleted successfully.',
    spo_dlt : 'Sponsor has been deleted successfully.',
    stg_dlt : 'Stage has been deleted successfully.',
    prtn_dlt : 'Partner has been deleted successfully.',
    msg_dlt : 'Message has been deleted successfully.',
    agenda_dlt : 'Agenda has been deleted successfully.',
    expo_dlt : 'Expo has been deleted successfully.',
    cf_dlt : 'Custom field has been deleted successfully.',
    pt_dlt : 'Post has been deleted successfully.',
    ss_dlt : 'Session has been deleted successfully.',
    org_dlt : 'Organization has been deleted successfully.',
    fea_speaker_add : 'Speaker category has been added successfully.',
    fea_partner_add : 'Partner category has been added successfully.',
    fea_spa_dlt : 'Speaker category has been deleted successfully.',
    fea_spon_upd : 'Partner category has been updated successfully.',
    fea_spk_upd : 'Speaker category has been updated successfully.',
    fea_spo_dlt : 'Partner category has been deleted successfully.',
    pwd_changed_eve : 'Password has been successfully changed for event user.',
    old_pwd_wrong : 'Old password has been wrong for event user.',
    old_new_cant : 'Old password and new password cannot be same.',
    cnt_dlt_act : 'Event is active you are not allowed to delete.',
    cnt_dlt : 'First deactivate the event then after you can delete it.',
    s_e_tm_cnt: 'Start time and End time cannot be same.',
    s_tm_e_cntt : 'End time should be higher than start date time',
    name_cnt_24h : 'You can not use same event name for same day.',
    event_name_cnt_24h : 'You cannot use same event name for same day.',
    alr_seq : 'Sequence number already used with above Event Id.',
    alrd_seqc : 'Sequence number already used with above Event Id.',
    noti_dlt : 'Notification has been deleted successfully.',
    ntfcn_rmvd : 'All notification has been removed successfully.',
    nt_rm : 'Notification has been removed successfully.',
    date_cnt_24h : 'You can not use same event name for same day with same organization.',
    date_nm_cnt_24h : 'You can not use same event name for same day with same organization.',
    spe_add_feat : 'Speaker has been successfully added to feature list.',
    spe_rm_feat : 'Speaker has been successfully removed from feature list.',
    all_rm_spe_feat : 'All speaker have been removed from feature list.',
    fea_seq_alr_spo : 'Sequence number already used in partner category.',
    alr_seqc_fea_spo : 'Sequence number already used in partner category.',
    spo_add_feat : 'Sponsor has been successfully added to feature list.',
    alr_nm_fea_spo : 'Sponsor category name has been used.',
    fea_nm_alr_spe : 'Speaker category name has been used.',
    spo_rm_feat : 'Sponsor has been successfully removed from feature list.',
    all_rm_spo_feat : 'All sponsor have been removed from feature list.',
    fea_nm_alr_spo: 'Sponsor category name has been used.',
    eve_bulk_upl : 'Bulk events has been successfully uploaded!',
    spe_bulk_upl : 'Bulk speakers has been successfully uploaded!',
    spon_bulk_upl : 'Bulk sponsors has been successfully uploaded!',
    expo_bulk_upl : 'Bulk expo booths has been successfully uploaded!',
    alr_nm_fea_spe : 'Speaker category name has been used.',
    fea_seq_alr_spe: 'Sequence number already used in speaker category.',
    alr_seqc_fea_spe: 'Sequence number already used in speaker category.',
    some_email_alr_ext_event : 'Some Email Id is already used with above Event Id and rest all has been stored.',
    o_cnt_dlt : 'First deactivate the organization then after you can delete it.',
    cmnt_add : 'Comment has been added successfully.',
    cmnt_updated : 'Comment has been updated successfully.',
    cmnt_dlt : 'Comment has been deleted successfully.',
    missing : 'You need to select either stage or sessions.',
    perm_dnd : 'You do not have permission to access this.',
    mt_email_alr_ex : 'Meet email has already used.',
    mt_apiK_alr_ex : 'Meet api keys has already used.',
    mt_apiSec_alr_ex : 'Meet api secret has already used.',
    mt_tkn_alr_ex : 'Meet token has already used.',
    lounge_email_exists : 'Email has been already used.',
    l_email_alr : 'Lounge email has been already used.',
    l_ak_alr : 'Lounge api keys has been already used.',
    l_as_alr : 'Lounge api secret has been already used.',
    l_zm_alr : 'Lounge zoom link has been already used.',
    l_tkn_alr : 'Lanity token has been already used.',
    key_dlt : 'Key has been deleted successfully.',
    sag_dlt : 'Scheduled agenda has been deleted successfully.',
    stg_dlt : 'Stage has been deleted successfully.',
    eve_dlt : 'Event has been deleted successfully.',
    eve_f_dlt : 'Event feed has been deleted successfully.',
    lounge_dlt : 'Lounge has been deleted successfully.',
    eve_fc_dlt : 'Event feed comment has been deleted successfully.',
    noti_dlt : 'Notification has been deleted successfully.',
    org_dlt : 'Organization has been deleted successfully.',
    spe_coll_dlt : 'Speaker category has been deleted successfully.',
    spo_coll_dlt : 'Sponsor category has been deleted successfully.',
    zoom_dlt : 'Zoom data has been deleted successfully.',
    pst_crt_eve : 'Feed has been posted successfully.',
    cnnt_acs_s : 'You can not select start time outside event.',
    cnnt_acs_e : 'You can not select end time outside event.',
    lnk_add : 'Link has been added successfully.',
    z_m_cr : 'Zoom meeting has been added successfully.',
    z_mt_upt : 'Zoom meeting has been updated successfully.',
    z_m_d : 'Zoom meeting has been deleted successfully.',
    jn_lng : 'You have joined the lounge meeting.',
    ex_lng : 'You have left the lounge meeting.',
    u_alr_jnlng : 'You can not join more than one seat at a time.',
    st1_resv : 'Seat1 has been reserved for this lounge.',
    st2_resv : 'Seat2 has been reserved for this lounge.',
    st3_resv : 'Seat3 has been reserved for this lounge.',
    st4_resv : 'Seat4 has been reserved for this lounge.',
    m_req_scc : 'You have successfully sent a request.',
    m_req_u_scc : 'You have successfully update meeting request.',
    alr_req_tpc : 'You have already sent a request for this topic.',
    alr_reqqq_tpc : 'You have already sent a request for this topic.',
    mt_req_acct : 'Your meet request has been accepted successfully,',
    email_exists : 'Email already exists.',
    n_zm_ac : 'There is no zoom account available for schedule meeting.',
    tkn_exp : 'link has been expired.',
    cnt_acc : 'You can not accept your own schedule meeting request.',
    cnt_s_req : 'You can not sent a request to yourself for schedule meeting.',
    n_l_zm : 'You do not have more paid account for lounge add.',
    n_avai : 'All seat has been occupied for this lounge.',
    y_cnt : 'You can not chat with yourself.',
    lng_tb_d : 'Lounge table has been deleted successfully.',
    y_cnt_n : 'You have to add atleast one lounge for create lounge.',
    eve_ext : 'There is already lounge exits on this event.',
    evve_ext : 'There is already lounge exits on this event.',
    ntfn_rd : 'Notification has been read successfully.',
    smthg_wrg : 'You cannot join before scheduled time.',
    des_mnd : 'Please enter post content.',
    cmnt_nl : 'please enter post comment.',
  }
}

const status = {
  OK: 200,
  Create: 201,
  Deleted: 204,
  BadRequest: 400,
  Unauthorized: 401,
  InternalServerError: 500,
  TooManyRequest: 429
}

const jsonStatus = {
  OK: 200,
  Create: 201,
  Deleted: 204,
  BadRequest: 400,
  Unauthorized: 401,
  InternalServerError: 500,
  TooManyRequest: 429
}


module.exports = {
  messages,
  status,
  jsonStatus
}
